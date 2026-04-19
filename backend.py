#!/usr/bin/env python3
"""
Chatbot Backend Server
Handles AI requests from parts_library.html frontend
Requires: pip install flask google-generativeai python-dotenv flask-cors
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
import logging
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='[%(asctime)s] [%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)

# Configure Gemini API
# Try to get from environment, or use default for testing
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY', '===============')

if not GEMINI_API_KEY or GEMINI_API_KEY == 'YOUR_API_KEY_HERE':
    logger.warning('[SETUP] ⚠️  GEMINI_API_KEY not set in environment. Using default key.')
else:
    logger.info('[SETUP] ✅ GEMINI_API_KEY configured from environment')

try:
    genai.configure(api_key=GEMINI_API_KEY)
    logger.info('[SETUP] ✅ Google Generative AI configured')
except Exception as e:
    logger.error(f'[SETUP] ❌ Failed to configure Gemini: {e}')

# ════════════════════════════════════════════════════════════
# API ENDPOINTS
# ════════════════════════════════════════════════════════════

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'service': 'ai-chat',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/ai-chat', methods=['POST'])
def ai_chat():
    """
    AI Chat endpoint
    
    Request: { "prompt": "user prompt text" }
    Response: { "reply": "ai response", "status": "success" }
    """
    try:
        # Validate request
        data = request.get_json()
        if not data:
            logger.warning('[API] Empty request body')
            return jsonify({
                'error': 'No JSON body provided',
                'status': 'error'
            }), 400
        
        prompt = data.get('prompt', '').strip()
        
        if not prompt:
            logger.warning('[API] Empty prompt')
            return jsonify({
                'error': 'Empty prompt',
                'status': 'error'
            }), 400
        
        # Limit prompt size
        if len(prompt) > 10000:
            logger.warning(f'[API] Prompt too long: {len(prompt)} chars')
            return jsonify({
                'error': 'Prompt too long (max 10000 chars)',
                'status': 'error'
            }), 400
        
        logger.info(f'[API] Processing prompt ({len(prompt)} chars)...')
        
        # Call Gemini AI
        try:
            model = genai.GenerativeModel('gemini-2.0-flash')
            response = model.generate_content(prompt)
            
            if not response or not response.text:
                logger.error('[API] Gemini returned empty response')
                return jsonify({
                    'error': 'AI generated no response',
                    'status': 'error'
                }), 500
            
            reply = response.text
            logger.info(f'[API] ✅ Success ({len(reply)} chars returned)')
            
            return jsonify({
                'reply': reply,
                'status': 'success'
            }), 200
            
        except Exception as e:
            error_msg = str(e)
            logger.error(f'[API] Gemini error: {error_msg}')
            
            # Check for common errors
            if 'API key' in error_msg or 'authentication' in error_msg.lower():
                return jsonify({
                    'error': 'AI service authentication failed. Check API key.',
                    'status': 'error'
                }), 500
            elif 'quota' in error_msg.lower():
                return jsonify({
                    'error': 'AI service quota exceeded. Try again later.',
                    'status': 'error'
                }), 429
            elif 'blocked' in error_msg.lower():
                return jsonify({
                    'error': 'Request blocked by AI safety filters.',
                    'status': 'error'
                }), 400
            else:
                return jsonify({
                    'error': f'AI service error: {error_msg}',
                    'status': 'error'
                }), 500
    
    except Exception as err:
        logger.error(f'[API] Unexpected error: {str(err)}')
        return jsonify({
            'error': 'Unexpected server error',
            'status': 'error'
        }), 500

@app.route('/', methods=['GET'])
def index():
    """Root endpoint"""
    return jsonify({
        'status': 'ok',
        'name': 'Vishvakarma Foundry AI Chat Backend',
        'endpoints': {
            'health': 'GET /api/health',
            'chat': 'POST /api/ai-chat'
        }
    })

# ════════════════════════════════════════════════════════════
# ERROR HANDLERS
# ════════════════════════════════════════════════════════════

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found', 'status': 'error'}), 404

@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({'error': 'Method not allowed', 'status': 'error'}), 405

@app.errorhandler(500)
def internal_error(error):
    logger.error(f'[ERROR] Internal server error: {error}')
    return jsonify({'error': 'Internal server error', 'status': 'error'}), 500

# ════════════════════════════════════════════════════════════
# SERVER STARTUP
# ════════════════════════════════════════════════════════════

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_ENV') == 'development'
    
    logger.info('════════════════════════════════════════════════════════════')
    logger.info('      VISHVAKARMA FOUNDRY AI — BACKEND SERVER')
    logger.info('════════════════════════════════════════════════════════════')
    logger.info(f'[START] Port: {port}')
    logger.info(f'[START] Debug mode: {debug}')
    logger.info(f'[START] AI Model: gemini-2.0-flash')
    logger.info('[START] Endpoints:')
    logger.info('        GET  http://localhost:5000/                (info)')
    logger.info('        GET  http://localhost:5000/api/health      (health check)')
    logger.info('        POST http://localhost:5000/api/ai-chat     (chat endpoint)')
    logger.info('[START] ✅ Server ready!')
    logger.info('════════════════════════════════════════════════════════════')
    
    app.run(host='0.0.0.0', port=port, debug=debug)
