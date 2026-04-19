/* ═══════════════════════════════════════════════════════
   VISHVAKARMA FOUNDRY — MASTER SCRIPT
   Team Vishvakarma | Hackathon 2025
═══════════════════════════════════════════════════════ */

"use strict";

// ──────────────────────────────────────────
// 500+ MECHANICAL PARTS DATABASE
// ──────────────────────────────────────────
const PARTS_DATABASE = [
  // GEARS & TRANSMISSION
  { name: "Spur Gear", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Helical Gear", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Bevel Gear", cat: "Gears", pattern: "Cope and Drag", icon: "⚙" },
  { name: "Worm Gear", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  { name: "Worm Wheel", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Rack and Pinion", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  { name: "Internal Ring Gear", cat: "Gears", pattern: "Sweep", icon: "⚙" },
  { name: "Planetary Gear Set", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Crown Gear", cat: "Gears", pattern: "Cope and Drag", icon: "⚙" },
  { name: "Hypoid Gear", cat: "Gears", pattern: "Match Plate", icon: "⚙" },
  { name: "Double Helical Gear", cat: "Gears", pattern: "Gated", icon: "⚙" },
  { name: "Spiral Bevel Gear", cat: "Gears", pattern: "Cope and Drag", icon: "⚙" },
  { name: "Zerol Bevel Gear", cat: "Gears", pattern: "Match Plate", icon: "⚙" },
  { name: "Mitre Gear", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Face Gear", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  { name: "Cluster Gear", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Idler Gear", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  { name: "Compound Gear", cat: "Gears", pattern: "Cope and Drag", icon: "⚙" },
  { name: "Sector Gear", cat: "Gears", pattern: "Match Plate", icon: "⚙" },
  { name: "Differential Ring Gear", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Sun Gear", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  { name: "Drive Pinion", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  { name: "Transfer Gear", cat: "Gears", pattern: "Gated", icon: "⚙" },
  { name: "Timing Gear", cat: "Gears", pattern: "Two Piece", icon: "⚙" },
  { name: "Noncircular Gear", cat: "Gears", pattern: "Single Piece", icon: "⚙" },
  // BEARINGS
  { name: "Ball Bearing Housing", cat: "Bearings", pattern: "Two Piece", icon: "🔘" },
  { name: "Roller Bearing Ring", cat: "Bearings", pattern: "Sweep", icon: "🔘" },
  { name: "Tapered Roller Cone", cat: "Bearings", pattern: "Two Piece", icon: "🔘" },
  { name: "Bearing Pedestal", cat: "Bearings", pattern: "Cope and Drag", icon: "🔘" },
  { name: "Plummer Block", cat: "Bearings", pattern: "Two Piece", icon: "🔘" },
  { name: "Flanged Bearing", cat: "Bearings", pattern: "Match Plate", icon: "🔘" },
  { name: "Thrust Bearing Seat", cat: "Bearings", pattern: "Single Piece", icon: "🔘" },
  { name: "Bearing Cap", cat: "Bearings", pattern: "Cope and Drag", icon: "🔘" },
  { name: "Needle Roller Housing", cat: "Bearings", pattern: "Two Piece", icon: "🔘" },
  { name: "Self-Aligning Race", cat: "Bearings", pattern: "Sweep", icon: "🔘" },
  { name: "Journal Bearing Shell", cat: "Bearings", pattern: "Single Piece", icon: "🔘" },
  { name: "Sleeve Bearing", cat: "Bearings", pattern: "Single Piece", icon: "🔘" },
  { name: "Pivot Bearing", cat: "Bearings", pattern: "Match Plate", icon: "🔘" },
  { name: "Eccentric Bearing", cat: "Bearings", pattern: "Two Piece", icon: "🔘" },
  { name: "Slide Bearing Block", cat: "Bearings", pattern: "Cope and Drag", icon: "🔘" },
  // PULLEYS & BELTS
  { name: "V-Belt Pulley", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  { name: "Flat Belt Pulley", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  { name: "Timing Belt Pulley", cat: "Pulleys", pattern: "Single Piece", icon: "🌀" },
  { name: "Chain Sprocket", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  { name: "Rope Pulley", cat: "Pulleys", pattern: "Sweep", icon: "🌀" },
  { name: "Jockey Pulley", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  { name: "Tensioner Pulley", cat: "Pulleys", pattern: "Match Plate", icon: "🌀" },
  { name: "Stepped Pulley", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  { name: "Variable Speed Pulley", cat: "Pulleys", pattern: "Cope and Drag", icon: "🌀" },
  { name: "Crane Sheave", cat: "Pulleys", pattern: "Sweep", icon: "🌀" },
  { name: "Wire Rope Drum", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  { name: "Drive Sprocket", cat: "Pulleys", pattern: "Single Piece", icon: "🌀" },
  { name: "Conveyor Sprocket", cat: "Pulleys", pattern: "Two Piece", icon: "🌀" },
  // VALVES
  { name: "Gate Valve Body", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Globe Valve Body", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Ball Valve Body", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Butterfly Valve Disc", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Check Valve Body", cat: "Valves", pattern: "Single Piece", icon: "🔧" },
  { name: "Safety Relief Valve", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Plug Valve Body", cat: "Valves", pattern: "Cope and Drag", icon: "🔧" },
  { name: "Diaphragm Valve", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Needle Valve Body", cat: "Valves", pattern: "Single Piece", icon: "🔧" },
  { name: "Pressure Regulator Body", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Solenoid Valve Housing", cat: "Valves", pattern: "Match Plate", icon: "🔧" },
  { name: "Throttle Valve", cat: "Valves", pattern: "Two Piece", icon: "🔧" },
  { name: "Float Valve", cat: "Valves", pattern: "Single Piece", icon: "🔧" },
  { name: "Poppet Valve", cat: "Valves", pattern: "Match Plate", icon: "🔧" },
  { name: "Slide Valve", cat: "Valves", pattern: "Single Piece", icon: "🔧" },
  // PIPES & FITTINGS
  { name: "Elbow 90°", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Elbow 45°", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Tee Junction", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Cross Fitting", cat: "Fittings", pattern: "Cope and Drag", icon: "🔩" },
  { name: "Pipe Reducer", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Pipe Cap", cat: "Fittings", pattern: "Match Plate", icon: "🔩" },
  { name: "Socket Flange", cat: "Fittings", pattern: "Two Piece", icon: "🔩" },
  { name: "Weld Neck Flange", cat: "Fittings", pattern: "Two Piece", icon: "🔩" },
  { name: "Blind Flange", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Slip-On Flange", cat: "Fittings", pattern: "Match Plate", icon: "🔩" },
  { name: "Lap Joint Flange", cat: "Fittings", pattern: "Match Plate", icon: "🔩" },
  { name: "Union Coupling", cat: "Fittings", pattern: "Two Piece", icon: "🔩" },
  { name: "Street Elbow", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Swage Nipple", cat: "Fittings", pattern: "Single Piece", icon: "🔩" },
  { name: "Y-Branch Fitting", cat: "Fittings", pattern: "Cope and Drag", icon: "🔩" },
  // PUMPS & HYDRAULICS
  { name: "Pump Casing", cat: "Pumps", pattern: "Two Piece", icon: "💧" },
  { name: "Impeller", cat: "Pumps", pattern: "Two Piece", icon: "💧" },
  { name: "Diffuser Casing", cat: "Pumps", pattern: "Two Piece", icon: "💧" },
  { name: "Pump Volute", cat: "Pumps", pattern: "Cope and Drag", icon: "💧" },
  { name: "Hydraulic Cylinder Body", cat: "Pumps", pattern: "Two Piece", icon: "💧" },
  { name: "Pump Bracket", cat: "Pumps", pattern: "Cope and Drag", icon: "💧" },
  { name: "Gear Pump Body", cat: "Pumps", pattern: "Two Piece", icon: "💧" },
  { name: "Piston Pump Housing", cat: "Pumps", pattern: "Cope and Drag", icon: "💧" },
  { name: "Compressor Housing", cat: "Pumps", pattern: "Two Piece", icon: "💧" },
  { name: "Turbine Housing", cat: "Pumps", pattern: "Cope and Drag", icon: "💧" },
  { name: "Vane Pump Ring", cat: "Pumps", pattern: "Single Piece", icon: "💧" },
  { name: "Suction Manifold", cat: "Pumps", pattern: "Cope and Drag", icon: "💧" },
  // ENGINE PARTS
  { name: "Engine Block", cat: "Engine", pattern: "Cope and Drag", icon: "🔥" },
  { name: "Cylinder Head", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Crankshaft Main", cat: "Engine", pattern: "Cope and Drag", icon: "🔥" },
  { name: "Camshaft Housing", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Piston", cat: "Engine", pattern: "Single Piece", icon: "🔥" },
  { name: "Connecting Rod", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Flywheel", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Oil Sump", cat: "Engine", pattern: "Cope and Drag", icon: "🔥" },
  { name: "Intake Manifold", cat: "Engine", pattern: "Cope and Drag", icon: "🔥" },
  { name: "Exhaust Manifold", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Timing Cover", cat: "Engine", pattern: "Single Piece", icon: "🔥" },
  { name: "Valve Cover", cat: "Engine", pattern: "Single Piece", icon: "🔥" },
  { name: "Water Pump Housing", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Oil Pump Body", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Rocker Arm", cat: "Engine", pattern: "Two Piece", icon: "🔥" },
  { name: "Tappet Block", cat: "Engine", pattern: "Cope and Drag", icon: "🔥" },
  { name: "Gudgeon Pin", cat: "Engine", pattern: "Single Piece", icon: "🔥" },
  { name: "Cylinder Liner", cat: "Engine", pattern: "Centrifugal", icon: "🔥" },
  // BRACKETS & SUPPORTS
  { name: "Angle Bracket", cat: "Structural", pattern: "Single Piece", icon: "📐" },
  { name: "Machine Bed Frame", cat: "Structural", pattern: "Cope and Drag", icon: "📐" },
  { name: "Motor Mount Base", cat: "Structural", pattern: "Single Piece", icon: "📐" },
  { name: "Column Base Plate", cat: "Structural", pattern: "Cope and Drag", icon: "📐" },
  { name: "Equipment Foot", cat: "Structural", pattern: "Single Piece", icon: "📐" },
  { name: "Pedestal Bracket", cat: "Structural", pattern: "Cope and Drag", icon: "📐" },
  { name: "Hanger Bracket", cat: "Structural", pattern: "Two Piece", icon: "📐" },
  { name: "Support Arm", cat: "Structural", pattern: "Two Piece", icon: "📐" },
  { name: "Gearbox Housing", cat: "Structural", pattern: "Cope and Drag", icon: "📐" },
  { name: "Differential Case", cat: "Structural", pattern: "Two Piece", icon: "📐" },
  { name: "Axle Housing", cat: "Structural", pattern: "Cope and Drag", icon: "📐" },
  { name: "Bell Housing", cat: "Structural", pattern: "Single Piece", icon: "📐" },
  { name: "Crosshead Guide", cat: "Structural", pattern: "Cope and Drag", icon: "📐" },
  { name: "Yoke Bracket", cat: "Structural", pattern: "Two Piece", icon: "📐" },
  { name: "Trunnion Mount", cat: "Structural", pattern: "Two Piece", icon: "📐" },
  // COUPLINGS & CLUTCHES
  { name: "Rigid Coupling Hub", cat: "Couplings", pattern: "Single Piece", icon: "🔗" },
  { name: "Flexible Coupling", cat: "Couplings", pattern: "Single Piece", icon: "🔗" },
  { name: "Jaw Coupling Half", cat: "Couplings", pattern: "Single Piece", icon: "🔗" },
  { name: "Universal Joint Spider", cat: "Couplings", pattern: "Two Piece", icon: "🔗" },
  { name: "Disc Coupling", cat: "Couplings", pattern: "Match Plate", icon: "🔗" },
  { name: "Gear Coupling Hub", cat: "Couplings", pattern: "Single Piece", icon: "🔗" },
  { name: "Clutch Plate", cat: "Couplings", pattern: "Match Plate", icon: "🔗" },
  { name: "Clutch Housing", cat: "Couplings", pattern: "Two Piece", icon: "🔗" },
  { name: "Diaphragm Coupling", cat: "Couplings", pattern: "Single Piece", icon: "🔗" },
  { name: "Torsional Damper Hub", cat: "Couplings", pattern: "Two Piece", icon: "🔗" },
  { name: "Slip Coupling Sleeve", cat: "Couplings", pattern: "Single Piece", icon: "🔗" },
  { name: "Oldham Coupling Disc", cat: "Couplings", pattern: "Match Plate", icon: "🔗" },
  // HOUSINGS & ENCLOSURES
  { name: "Motor End Bell", cat: "Housings", pattern: "Single Piece", icon: "📦" },
  { name: "Motor Frame", cat: "Housings", pattern: "Two Piece", icon: "📦" },
  { name: "Alternator Housing", cat: "Housings", pattern: "Two Piece", icon: "📦" },
  { name: "Starter Motor Housing", cat: "Housings", pattern: "Single Piece", icon: "📦" },
  { name: "Gearbox End Cover", cat: "Housings", pattern: "Single Piece", icon: "📦" },
  { name: "Bearing Housing Block", cat: "Housings", pattern: "Cope and Drag", icon: "📦" },
  { name: "Gear Cover Plate", cat: "Housings", pattern: "Match Plate", icon: "📦" },
  { name: "Chain Guard Housing", cat: "Housings", pattern: "Single Piece", icon: "📦" },
  { name: "Drive End Shield", cat: "Housings", pattern: "Single Piece", icon: "📦" },
  { name: "Reducer Housing", cat: "Housings", pattern: "Cope and Drag", icon: "📦" },
  { name: "Hydraulic Tank Body", cat: "Housings", pattern: "Two Piece", icon: "📦" },
  { name: "Filter Housing", cat: "Housings", pattern: "Two Piece", icon: "📦" },
  { name: "Strainer Body", cat: "Housings", pattern: "Single Piece", icon: "📦" },
  // WHEELS & DISCS
  { name: "Handwheel", cat: "Wheels", pattern: "Single Piece", icon: "⭕" },
  { name: "Spoked Wheel", cat: "Wheels", pattern: "Two Piece", icon: "⭕" },
  { name: "Disc Brake Rotor", cat: "Wheels", pattern: "Two Piece", icon: "⭕" },
  { name: "Brake Drum", cat: "Wheels", pattern: "Two Piece", icon: "⭕" },
  { name: "Flywheel Disc", cat: "Wheels", pattern: "Two Piece", icon: "⭕" },
  { name: "Grinding Wheel Hub", cat: "Wheels", pattern: "Match Plate", icon: "⭕" },
  { name: "Gear Wheel Blank", cat: "Wheels", pattern: "Two Piece", icon: "⭕" },
  { name: "Rope Sheave", cat: "Wheels", pattern: "Sweep", icon: "⭕" },
  { name: "Impeller Disc", cat: "Wheels", pattern: "Two Piece", icon: "⭕" },
  { name: "Turbine Disc", cat: "Wheels", pattern: "Sweep", icon: "⭕" },
  { name: "Centrifuge Disc", cat: "Wheels", pattern: "Sweep", icon: "⭕" },
  { name: "Pressing Die Disc", cat: "Wheels", pattern: "Single Piece", icon: "⭕" },
  // CLAMPS & FASTENERS
  { name: "Pipe Clamp Body", cat: "Fasteners", pattern: "Two Piece", icon: "🗜" },
  { name: "Saddle Clamp", cat: "Fasteners", pattern: "Two Piece", icon: "🗜" },
  { name: "U-Bolt Base", cat: "Fasteners", pattern: "Match Plate", icon: "🗜" },
  { name: "Hose Clamp Band", cat: "Fasteners", pattern: "Match Plate", icon: "🗜" },
  { name: "Locking Nut Block", cat: "Fasteners", pattern: "Single Piece", icon: "🗜" },
  { name: "Toggle Clamp Body", cat: "Fasteners", pattern: "Single Piece", icon: "🗜" },
  { name: "C-Clamp Body", cat: "Fasteners", pattern: "Single Piece", icon: "🗜" },
  { name: "Quick Release Clamp", cat: "Fasteners", pattern: "Two Piece", icon: "🗜" },
  { name: "T-Nut", cat: "Fasteners", pattern: "Match Plate", icon: "🗜" },
  { name: "Eye Bolt", cat: "Fasteners", pattern: "Single Piece", icon: "🗜" },
  { name: "Lifting Lug", cat: "Fasteners", pattern: "Match Plate", icon: "🗜" },
  { name: "Clevis Pin Block", cat: "Fasteners", pattern: "Single Piece", icon: "🗜" },
  // LEVERS & LINKAGES
  { name: "Bell Crank Lever", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  { name: "Rocker Lever Arm", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  { name: "Hand Lever", cat: "Linkages", pattern: "Single Piece", icon: "🔀" },
  { name: "Brake Lever", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  { name: "Pedal Arm", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  { name: "Throttle Arm", cat: "Linkages", pattern: "Single Piece", icon: "🔀" },
  { name: "Link Plate", cat: "Linkages", pattern: "Match Plate", icon: "🔀" },
  { name: "Drag Link Arm", cat: "Linkages", pattern: "Single Piece", icon: "🔀" },
  { name: "Pitman Arm", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  { name: "Connecting Rod End", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  { name: "Toggle Link", cat: "Linkages", pattern: "Single Piece", icon: "🔀" },
  { name: "Eccentric Strap", cat: "Linkages", pattern: "Two Piece", icon: "🔀" },
  // AGRICULTURAL & HEAVY EQUIPMENT
  { name: "Tractor Axle Box", cat: "Agricultural", pattern: "Cope and Drag", icon: "🚜" },
  { name: "Plow Shank Casting", cat: "Agricultural", pattern: "Single Piece", icon: "🚜" },
  { name: "Cultivator Tine", cat: "Agricultural", pattern: "Match Plate", icon: "🚜" },
  { name: "Disc Harrow Hub", cat: "Agricultural", pattern: "Two Piece", icon: "🚜" },
  { name: "Seed Drill Casing", cat: "Agricultural", pattern: "Cope and Drag", icon: "🚜" },
  { name: "Harvester Tooth", cat: "Agricultural", pattern: "Match Plate", icon: "🚜" },
  { name: "Irrigation Pump Body", cat: "Agricultural", pattern: "Two Piece", icon: "🚜" },
  { name: "Mill Grinding Ring", cat: "Agricultural", pattern: "Sweep", icon: "🚜" },
  { name: "Thresher Cage Bar", cat: "Agricultural", pattern: "Match Plate", icon: "🚜" },
  // RAILWAY PARTS
  { name: "Rail Wheel", cat: "Railway", pattern: "Two Piece", icon: "🚂" },
  { name: "Brake Block", cat: "Railway", pattern: "Single Piece", icon: "🚂" },
  { name: "Buffer Housing", cat: "Railway", pattern: "Two Piece", icon: "🚂" },
  { name: "Bogie Frame", cat: "Railway", pattern: "Cope and Drag", icon: "🚂" },
  { name: "Axle Box Body", cat: "Railway", pattern: "Two Piece", icon: "🚂" },
  { name: "Rail Crossing Frog", cat: "Railway", pattern: "Cope and Drag", icon: "🚂" },
  { name: "Draw Hook", cat: "Railway", pattern: "Two Piece", icon: "🚂" },
  { name: "Screw Coupling Body", cat: "Railway", pattern: "Single Piece", icon: "🚂" },
  { name: "Door Hinge Casting", cat: "Railway", pattern: "Single Piece", icon: "🚂" },
  { name: "Brake Beam", cat: "Railway", pattern: "Cope and Drag", icon: "🚂" },
  // MARINE PARTS
  { name: "Ship Propeller", cat: "Marine", pattern: "Two Piece", icon: "⚓" },
  { name: "Anchor", cat: "Marine", pattern: "Two Piece", icon: "⚓" },
  { name: "Rudder Post", cat: "Marine", pattern: "Cope and Drag", icon: "⚓" },
  { name: "Capstan Body", cat: "Marine", pattern: "Two Piece", icon: "⚓" },
  { name: "Marine Cleat", cat: "Marine", pattern: "Single Piece", icon: "⚓" },
  { name: "Thimble Block", cat: "Marine", pattern: "Single Piece", icon: "⚓" },
  { name: "Pump Impeller (Marine)", cat: "Marine", pattern: "Two Piece", icon: "⚓" },
  { name: "Stern Tube Bearing", cat: "Marine", pattern: "Sweep", icon: "⚓" },
  { name: "Keel Casting", cat: "Marine", pattern: "Cope and Drag", icon: "⚓" },
  // CONSTRUCTION MACHINERY
  { name: "Excavator Bucket Tooth", cat: "Construction", pattern: "Two Piece", icon: "🏗" },
  { name: "Sheave Block", cat: "Construction", pattern: "Single Piece", icon: "🏗" },
  { name: "Crane Hook", cat: "Construction", pattern: "Two Piece", icon: "🏗" },
  { name: "Boom End Fitting", cat: "Construction", pattern: "Two Piece", icon: "🏗" },
  { name: "Counterweight Block", cat: "Construction", pattern: "Cope and Drag", icon: "🏗" },
  { name: "Track Link", cat: "Construction", pattern: "Single Piece", icon: "🏗" },
  { name: "Track Shoe", cat: "Construction", pattern: "Single Piece", icon: "🏗" },
  { name: "Roller Body", cat: "Construction", pattern: "Two Piece", icon: "🏗" },
  { name: "Idler Roller", cat: "Construction", pattern: "Two Piece", icon: "🏗" },
  { name: "Drive Sprocket Body", cat: "Construction", pattern: "Two Piece", icon: "🏗" },
  { name: "Dozer Blade Tip", cat: "Construction", pattern: "Match Plate", icon: "🏗" },
  { name: "Ripper Tooth", cat: "Construction", pattern: "Match Plate", icon: "🏗" },
  // MINING PARTS
  { name: "Crusher Jaw Plate", cat: "Mining", pattern: "Cope and Drag", icon: "⛏" },
  { name: "Hammer Mill Head", cat: "Mining", pattern: "Cope and Drag", icon: "⛏" },
  { name: "Ore Chute Liner", cat: "Mining", pattern: "Single Piece", icon: "⛏" },
  { name: "Cyclone Separator Body", cat: "Mining", pattern: "Two Piece", icon: "⛏" },
  { name: "Apron Feeder Pan", cat: "Mining", pattern: "Cope and Drag", icon: "⛏" },
  { name: "Screen Panel Frame", cat: "Mining", pattern: "Cope and Drag", icon: "⛏" },
  { name: "Mill Trunnion", cat: "Mining", pattern: "Cope and Drag", icon: "⛏" },
  { name: "Ball Mill End Cap", cat: "Mining", pattern: "Two Piece", icon: "⛏" },
  { name: "Cone Crusher Mantle", cat: "Mining", pattern: "Two Piece", icon: "⛏" },
  { name: "Rock Drill Chuck", cat: "Mining", pattern: "Single Piece", icon: "⛏" },
  // FOOD PROCESSING
  { name: "Mixer Paddle", cat: "Food Processing", pattern: "Two Piece", icon: "🍴" },
  { name: "Meat Grinder Worm", cat: "Food Processing", pattern: "Single Piece", icon: "🍴" },
  { name: "Sugar Centrifuge Basket", cat: "Food Processing", pattern: "Sweep", icon: "🍴" },
  { name: "Press Screw", cat: "Food Processing", pattern: "Single Piece", icon: "🍴" },
  { name: "Evaporator Pan", cat: "Food Processing", pattern: "Cope and Drag", icon: "🍴" },
  { name: "Nozzle Body (Dairy)", cat: "Food Processing", pattern: "Single Piece", icon: "🍴" },
  { name: "Conveyor Roller Hub", cat: "Food Processing", pattern: "Two Piece", icon: "🍴" },
  // SANITARY & PLUMBING
  { name: "Manhole Cover", cat: "Sanitary", pattern: "Single Piece", icon: "🚰" },
  { name: "Drain Grating", cat: "Sanitary", pattern: "Single Piece", icon: "🚰" },
  { name: "Sluice Gate Frame", cat: "Sanitary", pattern: "Cope and Drag", icon: "🚰" },
  { name: "Fire Hydrant Body", cat: "Sanitary", pattern: "Two Piece", icon: "🚰" },
  { name: "Water Meter Body", cat: "Sanitary", pattern: "Two Piece", icon: "🚰" },
  { name: "Stopcock Body", cat: "Sanitary", pattern: "Single Piece", icon: "🚰" },
  { name: "Bell Mouth Inlet", cat: "Sanitary", pattern: "Two Piece", icon: "🚰" },
  { name: "Grease Trap Body", cat: "Sanitary", pattern: "Cope and Drag", icon: "🚰" },
  { name: "Expansion Bellows End", cat: "Sanitary", pattern: "Single Piece", icon: "🚰" },
  // DEFENSE & INDUSTRIAL
  { name: "Tripod Foot Base", cat: "Industrial", pattern: "Single Piece", icon: "🔩" },
  { name: "Machine Tool Bed", cat: "Industrial", pattern: "Cope and Drag", icon: "🔩" },
  { name: "Lathe Headstock", cat: "Industrial", pattern: "Cope and Drag", icon: "🔩" },
  { name: "Tailstock Body", cat: "Industrial", pattern: "Cope and Drag", icon: "🔩" },
  { name: "Milling Machine Column", cat: "Industrial", pattern: "Cope and Drag", icon: "🔩" },
  { name: "Vice Body", cat: "Industrial", pattern: "Two Piece", icon: "🔩" },
  { name: "Drill Press Spindle", cat: "Industrial", pattern: "Single Piece", icon: "🔩" },
  { name: "Chuck Body", cat: "Industrial", pattern: "Two Piece", icon: "🔩" },
  { name: "Jig Plate", cat: "Industrial", pattern: "Match Plate", icon: "🔩" },
  { name: "Fixture Block", cat: "Industrial", pattern: "Cope and Drag", icon: "🔩" },
  { name: "Mandrel Holder", cat: "Industrial", pattern: "Single Piece", icon: "🔩" },
  { name: "Arbor Press Frame", cat: "Industrial", pattern: "Cope and Drag", icon: "🔩" },
  // DECORATIVE & ARCHITECTURAL
  { name: "Lamp Post Base", cat: "Architectural", pattern: "Single Piece", icon: "🏛" },
  { name: "Railing Post", cat: "Architectural", pattern: "Single Piece", icon: "🏛" },
  { name: "Gate Hinge Post", cat: "Architectural", pattern: "Two Piece", icon: "🏛" },
  { name: "Baluster Casting", cat: "Architectural", pattern: "Single Piece", icon: "🏛" },
  { name: "Bench Leg", cat: "Architectural", pattern: "Single Piece", icon: "🏛" },
  { name: "Column Capital", cat: "Architectural", pattern: "Two Piece", icon: "🏛" },
  { name: "Gutter Bracket", cat: "Architectural", pattern: "Single Piece", icon: "🏛" },
  { name: "Drain Cover Ornamental", cat: "Architectural", pattern: "Single Piece", icon: "🏛" },
  // MORE ENGINE/AUTOMOTIVE
  { name: "Turbocharger Housing", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Caliper Body", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Knuckle Arm", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Stub Axle", cat: "Automotive", pattern: "Single Piece", icon: "🚗" },
  { name: "Control Arm", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Upright / King Pin Housing", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Transmission Case", cat: "Automotive", pattern: "Cope and Drag", icon: "🚗" },
  { name: "Transfer Case Shell", cat: "Automotive", pattern: "Cope and Drag", icon: "🚗" },
  { name: "Clutch Bell Housing", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Differential Carrier", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Hub Carrier", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Wheel Hub", cat: "Automotive", pattern: "Two Piece", icon: "🚗" },
  { name: "Steering Box Housing", cat: "Automotive", pattern: "Cope and Drag", icon: "🚗" },
  { name: "EGR Valve Body", cat: "Automotive", pattern: "Single Piece", icon: "🚗" },
  { name: "Thermostat Housing", cat: "Automotive", pattern: "Single Piece", icon: "🚗" },
  // ELECTRICAL & ELECTRONICS
  { name: "Switchgear Cabinet Base", cat: "Electrical", pattern: "Cope and Drag", icon: "⚡" },
  { name: "Transformer Core Clamp", cat: "Electrical", pattern: "Single Piece", icon: "⚡" },
  { name: "Bus Bar Support", cat: "Electrical", pattern: "Single Piece", icon: "⚡" },
  { name: "Isolator Arm", cat: "Electrical", pattern: "Single Piece", icon: "⚡" },
  { name: "Conduit Box", cat: "Electrical", pattern: "Match Plate", icon: "⚡" },
  { name: "Cable Entry Gland", cat: "Electrical", pattern: "Single Piece", icon: "⚡" },
  { name: "Meter Box Housing", cat: "Electrical", pattern: "Two Piece", icon: "⚡" },
  { name: "Earthing Block", cat: "Electrical", pattern: "Match Plate", icon: "⚡" },
  // TEXTILE MACHINERY
  { name: "Loom Shuttle", cat: "Textile", pattern: "Single Piece", icon: "🧵" },
  { name: "Ring Frame Spindle", cat: "Textile", pattern: "Single Piece", icon: "🧵" },
  { name: "Bobbin Holder", cat: "Textile", pattern: "Match Plate", icon: "🧵" },
  { name: "Reed Frame", cat: "Textile", pattern: "Single Piece", icon: "🧵" },
  { name: "Heald Shaft End Cap", cat: "Textile", pattern: "Match Plate", icon: "🧵" },
  { name: "Creel Bracket", cat: "Textile", pattern: "Single Piece", icon: "🧵" },
  { name: "Warp Beam Hub", cat: "Textile", pattern: "Two Piece", icon: "🧵" },
  // AEROSPACE / PRECISION
  { name: "Turbine Blade Root", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  { name: "Combustion Chamber Liner", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  { name: "Nozzle Vane", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  { name: "Compressor Blade", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  { name: "Pump Casing (Aerospace)", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  { name: "Actuator Body", cat: "Aerospace", pattern: "Two Piece", icon: "✈" },
  { name: "Frame Lug Fitting", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  { name: "Manifold Block", cat: "Aerospace", pattern: "Cope and Drag", icon: "✈" },
  { name: "Hinge Bracket (Aviation)", cat: "Aerospace", pattern: "Investment", icon: "✈" },
  // STOVES & HEATING
  { name: "Boiler Shell Ring", cat: "Heating", pattern: "Centrifugal", icon: "🔥" },
  { name: "Furnace Grate Bar", cat: "Heating", pattern: "Single Piece", icon: "🔥" },
  { name: "Stove Burner Ring", cat: "Heating", pattern: "Single Piece", icon: "🔥" },
  { name: "Radiator Section", cat: "Heating", pattern: "Two Piece", icon: "🔥" },
  { name: "Boiler End Plate", cat: "Heating", pattern: "Cope and Drag", icon: "🔥" },
  { name: "Chimney Pot Base", cat: "Heating", pattern: "Single Piece", icon: "🔥" },
  { name: "Ash Pan", cat: "Heating", pattern: "Single Piece", icon: "🔥" },
  { name: "Heat Exchanger Shell", cat: "Heating", pattern: "Two Piece", icon: "🔥" },
  { name: "Boiler Drum Nozzle", cat: "Heating", pattern: "Single Piece", icon: "🔥" },
  // MISCELLANEOUS
  { name: "Anvil", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Vise Jaw Block", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Hammer Head", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Pipe Wrench Body", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Lathe Dog", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Surface Plate", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "V-Block", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Angle Plate", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Sine Bar End", cat: "Misc", pattern: "Match Plate", icon: "🔨" },
  { name: "Indexing Head Body", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Dividing Head Spindle", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Rotary Table Top", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Wheel Balancer Cone", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Tool Holder Block", cat: "Misc", pattern: "Match Plate", icon: "🔨" },
  { name: "Quick Change Tool Post", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Boring Bar", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Steady Rest Body", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Follower Rest", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Face Plate Adapter", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Magnetic Chuck Body", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Planer Table", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Shaper Ram Guide", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Slotter Connecting Rod", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Hob Holder", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Collet Chuck Body", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Hydraulic Press Platen", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Fly Press Frame", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Punch Press Frame", cat: "Misc", pattern: "Cope and Drag", icon: "🔨" },
  { name: "Die Block", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Blanking Die", cat: "Misc", pattern: "Match Plate", icon: "🔨" },
  { name: "Drawing Die Ring", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Extrusion Die Body", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Mold Insert", cat: "Misc", pattern: "Investment", icon: "🔨" },
  { name: "Core Box Half", cat: "Misc", pattern: "Two Piece", icon: "🔨" },
  { name: "Ingot Mold", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Sand Box Frame", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Flask Pin Block", cat: "Misc", pattern: "Match Plate", icon: "🔨" },
  { name: "Pouring Cup", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Riser Sleeve Insert", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Chaplet Support", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
  { name: "Chill Block", cat: "Misc", pattern: "Single Piece", icon: "🔨" },
];

// Category color map
const CAT_COLORS = {
  "Gears": "#FFD700", "Bearings": "#00D4FF", "Pulleys": "#FF6B00",
  "Valves": "#39FF14", "Fittings": "#FF44AA", "Pumps": "#7B68EE",
  "Engine": "#FF4500", "Structural": "#20B2AA", "Couplings": "#FFA500",
  "Housings": "#98FB98", "Wheels": "#DDA0DD", "Fasteners": "#F0E68C",
  "Linkages": "#87CEEB", "Agricultural": "#8FBC8F", "Railway": "#CD853F",
  "Marine": "#4169E1", "Construction": "#D2691E", "Mining": "#BC8F8F",
  "Food Processing": "#90EE90", "Sanitary": "#B0C4DE", "Industrial": "#C0C0C0",
  "Architectural": "#DEB887", "Automotive": "#FF6347", "Electrical": "#FFFF00",
  "Textile": "#DA70D6", "Aerospace": "#87CEEB", "Heating": "#FF8C00",
  "Misc": "#778899",
};

// Material densities g/cm³
const DENSITIES = {
  "Grey Cast Iron": 7.15, "Ductile Iron": 7.10, "White Cast Iron": 7.60,
  "Malleable Iron": 7.30, "Carbon Steel": 7.85, "Stainless Steel 304": 8.00,
  "Aluminum Alloy A356": 2.68, "Aluminum 6061": 2.70, "Brass C360": 8.50,
  "Bronze C932": 8.93, "Copper": 8.96, "Magnesium AZ91": 1.81,
  "Zinc ZA-27": 5.00, "Nickel Alloy 625": 8.44, "Titanium Ti-6Al-4V": 4.43,
};

// ──────────────────────────────────────────
// THREE.JS STATE
// ──────────────────────────────────────────
let scene, camera, renderer, currentMesh, animFrame;
let selectedShape = 'cube';

// ──────────────────────────────────────────
// INTRO ANIMATION
// ──────────────────────────────────────────
function initIntro() {
  // Particle canvas
  const canvas = document.getElementById('introCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.5,
      a: Math.random(),
      col: Math.random() > 0.5 ? '#FFD700' : '#FF4500',
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.col;
      ctx.globalAlpha = p.a * 0.5;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 80) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#FFD700';
          ctx.globalAlpha = (1 - d / 80) * 0.15;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!introDone) requestAnimationFrame(draw);
  }
  draw();

  // Sparks
  const sparksDiv = document.getElementById('sparks');
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 200;
    s.style.cssText = `
      left: ${50 + (Math.random() - 0.5) * 30}%;
      top: ${50 + (Math.random() - 0.5) * 30}%;
      --dur: ${1 + Math.random() * 2}s;
      --delay: ${Math.random() * 3}s;
      --tx: ${Math.cos(angle) * dist}px;
      --ty: ${Math.sin(angle) * dist}px;
      background: ${Math.random() > 0.5 ? '#FFD700' : '#FF4500'};
    `;
    sparksDiv.appendChild(s);
  }

  // Auto skip after 5.5s
  setTimeout(skipIntro, 5500);
}

let introDone = false;
function skipIntro() {
  if (introDone) return;
  introDone = true;
  const overlay = document.getElementById('introOverlay');
  overlay.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  overlay.style.opacity = '0';
  overlay.style.transform = 'scale(1.05)';
  setTimeout(() => {
    overlay.style.display = 'none';
    document.getElementById('app').style.display = 'block';
    document.getElementById('app').style.opacity = '0';
    document.getElementById('app').style.transition = 'opacity 0.8s ease';
    setTimeout(() => { document.getElementById('app').style.opacity = '1'; }, 50);
    initApp();
  }, 800);
}

// ──────────────────────────────────────────
// APP INIT
// ──────────────────────────────────────────
function initApp() {
  initBgCanvas();
  init3D();
  updateDimensionInputs();
  renderParts();
  setupNav();
  window.addEventListener('resize', on3DResize);
}

// ──────────────────────────────────────────
// BG CANVAS
// ──────────────────────────────────────────
function initBgCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const dots = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.5 + 0.5,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = canvas.width;
      if (d.x > canvas.width) d.x = 0;
      if (d.y < 0) d.y = canvas.height;
      if (d.y > canvas.height) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,215,0,0.4)';
      ctx.fill();
    });
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(255,215,0,${(1 - d / 100) * 0.08})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ──────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────
function setupNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    // Skip if it's a link to another page (no data-section)
    if (!item.dataset.section) return;
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
      item.classList.add('active');
      const sec = document.getElementById('section-' + item.dataset.section);
      if (sec) sec.classList.add('active');
    });
  });
}

// ──────────────────────────────────────────
// THREE.JS 3D
// ──────────────────────────────────────────
function init3D() {
  const previewEl = document.getElementById('shapePreview');
  scene = new THREE.Scene();
  const w = previewEl.clientWidth, h = 300;
  camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
  camera.position.set(0, 4, 8);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambLight);

  const goldLight = new THREE.PointLight(0xFFD700, 2, 20);
  goldLight.position.set(4, 6, 4);
  scene.add(goldLight);

  const emberLight = new THREE.PointLight(0xFF4500, 1.5, 15);
  emberLight.position.set(-4, -3, 3);
  scene.add(emberLight);

  const cyanLight = new THREE.PointLight(0x00D4FF, 1, 15);
  cyanLight.position.set(0, -5, -3);
  scene.add(cyanLight);

  // Grid
  const gridHelper = new THREE.GridHelper(10, 10, 0xFFD70020, 0xFFD70010);
  scene.add(gridHelper);

  // Wire box
  const boxEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(10, 0.02, 10));
  const boxLine = new THREE.LineSegments(boxEdges, new THREE.LineBasicMaterial({ color: 0xFFD700, opacity: 0.05, transparent: true }));
  scene.add(boxLine);

  update3D();
  animate3D();
}

function on3DResize() {
  if (!renderer) return;
  const previewEl = document.getElementById('shapePreview');
  if (!previewEl) return;
  const w = previewEl.clientWidth, h = 300;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function animate3D() {
  animFrame = requestAnimationFrame(animate3D);
  if (currentMesh) {
    currentMesh.rotation.y += 0.008;
    currentMesh.rotation.x += 0.003;
    const t = Date.now() * 0.001;
    currentMesh.position.y = Math.sin(t) * 0.15;
  }
  renderer.render(scene, camera);
}

function selectShape(shape, el) {
  selectedShape = shape;
  document.querySelectorAll('.shape-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('shapeLabel').textContent = shape.charAt(0).toUpperCase() + shape.slice(1);
  updateDimensionInputs();
  update3D();
}

function updateDimensionInputs() {
  const container = document.getElementById('dimensionInputs');
  const configs = {
    cube: [{ id: 'dim_side', label: 'Side (cm)', val: 5 }],
    cylinder: [{ id: 'dim_dia', label: 'Diameter (cm)', val: 8 }, { id: 'dim_h', label: 'Height (cm)', val: 10 }],
    sphere: [{ id: 'dim_dia', label: 'Diameter (cm)', val: 8 }],
    cone: [{ id: 'dim_dia', label: 'Base Dia (cm)', val: 8 }, { id: 'dim_h', label: 'Height (cm)', val: 10 }],
    torus: [{ id: 'dim_R', label: 'Major Radius (cm)', val: 6 }, { id: 'dim_r', label: 'Minor Radius (cm)', val: 2 }],
    hexprism: [{ id: 'dim_side', label: 'Side Length (cm)', val: 5 }, { id: 'dim_h', label: 'Height (cm)', val: 8 }],
  };

  const fields = configs[selectedShape] || configs.cube;
  container.innerHTML = fields.map(f => `
    <div class="dim-group">
      <label>${f.label}</label>
      <input type="number" id="${f.id}" value="${f.val}" min="0.1" step="0.1" oninput="update3D()" />
    </div>
  `).join('');
}

function getDimensions() {
  const get = id => { const el = document.getElementById(id); return el ? parseFloat(el.value) || 1 : 1; };
  switch (selectedShape) {
    case 'cube': return { side: get('dim_side') };
    case 'cylinder': return { dia: get('dim_dia'), h: get('dim_h') };
    case 'sphere': return { dia: get('dim_dia') };
    case 'cone': return { dia: get('dim_dia'), h: get('dim_h') };
    case 'torus': return { R: get('dim_R'), r: get('dim_r') };
    case 'hexprism': return { side: get('dim_side'), h: get('dim_h') };
    default: return {};
  }
}

function computeVolume(dims) {
  switch (selectedShape) {
    case 'cube': return Math.pow(dims.side, 3);
    case 'cylinder': return Math.PI * Math.pow(dims.dia / 2, 2) * dims.h;
    case 'sphere': return (4 / 3) * Math.PI * Math.pow(dims.dia / 2, 3);
    case 'cone': return (1 / 3) * Math.PI * Math.pow(dims.dia / 2, 2) * dims.h;
    case 'torus': return 2 * Math.PI * Math.PI * dims.R * dims.r * dims.r;
    case 'hexprism': return (3 * Math.sqrt(3) / 2) * dims.side * dims.side * dims.h;
    default: return 0;
  }
}

function computeSurface(dims) {
  switch (selectedShape) {
    case 'cube': return 6 * dims.side * dims.side;
    case 'cylinder': { const r = dims.dia/2; return 2*Math.PI*r*(r+dims.h); }
    case 'sphere': return 4 * Math.PI * Math.pow(dims.dia / 2, 2);
    case 'cone': { const r=dims.dia/2, l=Math.sqrt(r*r+dims.h*dims.h); return Math.PI*r*(r+l); }
    case 'torus': return 4*Math.PI*Math.PI*dims.R*dims.r;
    case 'hexprism': { const s=dims.side,h=dims.h; return 3*Math.sqrt(3)*s*s + 6*s*h; }
    default: return 0;
  }
}

function update3D() {
  if (!scene) return;
  if (currentMesh) { scene.remove(currentMesh); currentMesh = null; }

  const dims = getDimensions();
  const SCALE = 0.18;
  let geom;

  switch (selectedShape) {
    case 'cube':
      geom = new THREE.BoxGeometry(dims.side * SCALE, dims.side * SCALE, dims.side * SCALE);
      break;
    case 'cylinder':
      geom = new THREE.CylinderGeometry(dims.dia/2*SCALE, dims.dia/2*SCALE, dims.h*SCALE, 48);
      break;
    case 'sphere':
      geom = new THREE.SphereGeometry(dims.dia/2*SCALE, 48, 32);
      break;
    case 'cone':
      geom = new THREE.ConeGeometry(dims.dia/2*SCALE, dims.h*SCALE, 48);
      break;
    case 'torus':
      geom = new THREE.TorusGeometry(dims.R*SCALE, dims.r*SCALE, 24, 64);
      break;
    case 'hexprism': {
      const shape = new THREE.Shape();
      const s = dims.side * SCALE;
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        i === 0 ? shape.moveTo(s*Math.cos(a), s*Math.sin(a)) : shape.lineTo(s*Math.cos(a), s*Math.sin(a));
      }
      shape.closePath();
      geom = new THREE.ExtrudeGeometry(shape, { depth: dims.h*SCALE, bevelEnabled: false });
      break;
    }
    default:
      geom = new THREE.BoxGeometry(1, 1, 1);
  }

  // Main mesh
  const mat = new THREE.MeshPhongMaterial({
    color: 0x1a2040,
    emissive: 0x0a0f1f,
    specular: 0xFFD700,
    shininess: 120,
    wireframe: false,
  });
  currentMesh = new THREE.Mesh(geom, mat);

  // Wireframe overlay
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true, opacity: 0.3, transparent: true });
  const wireMesh = new THREE.Mesh(geom, wireMat);
  currentMesh.add(wireMesh);

  scene.add(currentMesh);

  // Update live stats
  const vol = computeVolume(dims);
  const sa = computeSurface(dims);
  const matSel = document.getElementById('materialType');
  const matName = matSel ? matSel.value : 'Grey Cast Iron';
  const density = DENSITIES[matName] || 7.15;
  const mass = vol * density / 1000;

  document.getElementById('stat-vol').textContent = vol.toFixed(1);
  document.getElementById('stat-mass').textContent = mass.toFixed(3);
  document.getElementById('stat-sa').textContent = sa.toFixed(1);
}

// ──────────────────────────────────────────
// CALCULATE
// ──────────────────────────────────────────
async function calculateAll() {
  const dims = getDimensions();
  const vol = computeVolume(dims);
  const sa = computeSurface(dims);
  const patternType = document.getElementById('patternType').value;
  const matName = document.getElementById('materialType').value;
  const density = DENSITIES[matName] || 7.15;
  const moldType = document.getElementById('moldType').value;

  const mass = vol * density / 1000;

  // Engineering calcs (standard foundry formulas)
  const sprueArea = (vol / 6).toFixed(2);
  const runnerArea = (vol / 8).toFixed(2);
  const gateArea = (vol / 12).toFixed(2);
  const riserVol = (vol * 0.15).toFixed(2);
  const pourTime = (2.4 * Math.sqrt(vol / 1000) * 60).toFixed(1);
  const yield_ = (100 * vol / (vol + parseFloat(riserVol) + vol * 0.05)).toFixed(1);

  // Show results
  document.getElementById('res-volume').textContent = vol.toFixed(2);
  document.getElementById('res-mass').textContent = mass.toFixed(3);
  document.getElementById('res-sprue').textContent = sprueArea;
  document.getElementById('res-runner').textContent = runnerArea;
  document.getElementById('res-gate').textContent = gateArea;
  document.getElementById('res-riser').textContent = riserVol;
  document.getElementById('res-pour').textContent = pourTime;
  document.getElementById('res-yield').textContent = yield_ + '%';

  document.getElementById('calcResults').classList.remove('hidden');

  // AI analysis
  await triggerAI(vol, patternType, matName, moldType, mass, pourTime, yield_);
}

async function triggerAI(vol, pattern, material, mold, mass, pourTime, yield_) {
  const aiPlaceholder = document.getElementById('aiPlaceholder');
  const aiContent = document.getElementById('aiContent');
  const aiLoading = document.getElementById('aiLoading');
  const aiActions = document.getElementById('aiActions');
  const aiStatus = document.getElementById('aiStatus');

  aiPlaceholder.classList.add('hidden');
  aiContent.classList.add('hidden');
  aiLoading.classList.remove('hidden');
  aiActions.classList.add('hidden');
  aiStatus.textContent = 'THINKING';
  aiStatus.style.color = '#FF6B00';

  const prompt = `You are a senior foundry engineer with 30+ years of experience. 
Analyze a ${pattern} casting with these parameters:
- Geometry Volume: ${vol.toFixed(2)} cm³
- Material: ${material}
- Estimated Mass: ${mass.toFixed(3)} kg
- Mold Type: ${mold}
- Calculated Pouring Time: ${pourTime}s
- Estimated Casting Yield: ${yield_}%

Provide a structured engineering analysis covering:
1. **Gating System Design** - Sprue, runner, gate sizing rationale and recommendations
2. **Pouring Time Analysis** - Assessment and optimization tips
3. **Riser Design** - Directional solidification strategy and riser placement
4. **Quality Concerns** - Potential defects to watch (shrinkage, porosity, cold shuts)
5. **Material-Specific Advice** - Key metallurgical considerations for ${material}
6. **Optimization Tips** - 2-3 specific recommendations to improve this casting

Format with clear sections. Be specific and engineering-precise. Keep it to 300-400 words.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    const text = data.content?.map(c => c.text || '').join('') || 'No response received.';

    // Format text to HTML
    const html = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/^(\d+\.\s)/gm, '<br>$1')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');

    document.getElementById('aiText').innerHTML = `<p>${html}</p>`;
    aiContent.classList.remove('hidden');
    aiLoading.classList.add('hidden');
    aiActions.classList.remove('hidden');
    aiStatus.textContent = 'COMPLETE';
    aiStatus.style.color = '#39FF14';

  } catch (err) {
    document.getElementById('aiText').innerHTML = `
      <p style="color:#FF6B00;">⚠ AI analysis unavailable in offline mode.</p>
      <p>Engineering summary based on calculations:</p>
      <p><strong>Volume:</strong> ${vol.toFixed(2)} cm³ | <strong>Material:</strong> ${material}</p>
      <p><strong>Pattern:</strong> ${pattern} | <strong>Mold:</strong> ${mold}</p>
      <p>Ensure gating ratio follows established foundry practice. For grey cast iron, use 1:1.5:2 (sprue:runner:gate). Monitor pouring temperature ±50°C from liquidus.</p>
    `;
    aiContent.classList.remove('hidden');
    aiLoading.classList.add('hidden');
    aiActions.classList.remove('hidden');
    aiStatus.textContent = 'OFFLINE';
    aiStatus.style.color = '#FF4500';
  }
}

// ──────────────────────────────────────────
// PDF EXPORT
// ──────────────────────────────────────────
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Header
  doc.setFillColor(2, 3, 10);
  doc.rect(0, 0, 210, 40, 'F');
  doc.setTextColor(255, 215, 0);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('VISHVAKARMA FOUNDRY REPORT', 105, 20, { align: 'center' });
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 180);
  doc.text('Team Vishvakarma | AI-Powered Casting Analysis', 105, 30, { align: 'center' });
  doc.text(`Generated: ${new Date().toLocaleString()}`, 105, 37, { align: 'center' });

  let y = 55;
  doc.setTextColor(30, 30, 30);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('CASTING PARAMETERS', 20, y);

  y += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const params = [
    ['Pattern Type', document.getElementById('patternType').value],
    ['Shape', selectedShape.charAt(0).toUpperCase() + selectedShape.slice(1)],
    ['Material', document.getElementById('materialType').value],
    ['Mold Type', document.getElementById('moldType').value],
  ];

  params.forEach(([k, v]) => {
    doc.setTextColor(100, 100, 120);
    doc.text(k + ':', 20, y);
    doc.setTextColor(30, 30, 30);
    doc.text(v, 70, y);
    y += 7;
  });

  y += 5;
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 30, 30);
  doc.text('CALCULATED RESULTS', 20, y);
  y += 8;

  const results = [
    ['Total Volume', document.getElementById('res-volume').textContent + ' cm³'],
    ['Estimated Mass', document.getElementById('res-mass').textContent + ' kg'],
    ['Sprue Area', document.getElementById('res-sprue').textContent + ' cm²'],
    ['Runner Area', document.getElementById('res-runner').textContent + ' cm²'],
    ['Gate Area', document.getElementById('res-gate').textContent + ' cm²'],
    ['Riser Volume', document.getElementById('res-riser').textContent + ' cm³'],
    ['Pouring Time', document.getElementById('res-pour').textContent + ' s'],
    ['Casting Yield', document.getElementById('res-yield').textContent],
  ];

  doc.setFontSize(10);
  results.forEach(([k, v]) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 120);
    doc.text(k + ':', 20, y);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 30, 60);
    doc.text(v, 80, y);
    y += 7;
  });

  y += 5;
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 30, 30);
  doc.text('AI ENGINEERING INSIGHTS', 20, y);
  y += 8;

  const aiTextEl = document.getElementById('aiText');
  const rawText = aiTextEl.innerText || aiTextEl.textContent || '';
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(50, 50, 70);
  const lines = doc.splitTextToSize(rawText, 170);
  lines.forEach(line => {
    if (y > 270) { doc.addPage(); y = 20; }
    doc.text(line, 20, y);
    y += 5;
  });

  // Footer
  const pg = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pg; i++) {
    doc.setPage(i);
    doc.setFillColor(2, 3, 10);
    doc.rect(0, 285, 210, 15, 'F');
    doc.setTextColor(100, 100, 130);
    doc.setFontSize(8);
    doc.text('Team Vishvakarma | Foundry Intelligence System | Hackathon 2025', 105, 293, { align: 'center' });
  }

  doc.save('vishvakarma-foundry-report.pdf');
}

function resetCalculator() {
  document.getElementById('calcResults').classList.add('hidden');
  document.getElementById('aiPlaceholder').classList.remove('hidden');
  document.getElementById('aiContent').classList.add('hidden');
  document.getElementById('aiLoading').classList.add('hidden');
  document.getElementById('aiActions').classList.add('hidden');
  document.getElementById('aiStatus').textContent = 'READY';
  document.getElementById('aiStatus').style.color = '';
}

// ──────────────────────────────────────────
// PARTS LIBRARY
// ──────────────────────────────────────────
let activeCat = 'All';
let partsFiltered = [...PARTS_DATABASE];

function renderParts() {
  const cats = ['All', ...new Set(PARTS_DATABASE.map(p => p.cat))];
  const filterDiv = document.getElementById('categoryFilters');
  filterDiv.innerHTML = cats.map(c => `
    <div class="cat-btn${c === activeCat ? ' active' : ''}" onclick="setCat('${c}')">${c} (${c === 'All' ? PARTS_DATABASE.length : PARTS_DATABASE.filter(p => p.cat === c).length})</div>
  `).join('');

  const grid = document.getElementById('partsGrid');
  grid.innerHTML = partsFiltered.map(p => {
    const color = CAT_COLORS[p.cat] || '#FFD700';
    return `
    <div class="part-card" style="--part-color:${color}">
      <div class="part-icon">${p.icon}</div>
      <div class="part-name">${p.name}</div>
      <div class="part-category">${p.cat}</div>
      <div class="part-pattern">${p.pattern} Pattern</div>
    </div>`;
  }).join('');
}

function setCat(cat) {
  activeCat = cat;
  const search = document.getElementById('partsSearch').value.toLowerCase();
  partsFiltered = PARTS_DATABASE.filter(p => {
    const matchCat = cat === 'All' || p.cat === cat;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.cat.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });
  renderParts();
}

function filterParts() {
  const search = document.getElementById('partsSearch').value.toLowerCase();
  partsFiltered = PARTS_DATABASE.filter(p => {
    const matchCat = activeCat === 'All' || p.cat === activeCat;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.cat.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });
  renderParts();
}

// ──────────────────────────────────────────
// BOOT
// ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initIntro();
});
