// Default data for Inspection Bubble
// This will be used when no localStorage data exists

const DEFAULT_DATA = {
    categories: [
        { id: 'general', name: 'General', icon: '📋' },
        { id: 'electrical', name: 'Electrical', icon: '⚡' },
        { id: 'plumbing', name: 'Plumbing', icon: '🔧' },
        { id: 'structural', name: 'Structural', icon: '🏗️' },
        { id: 'safety', name: 'Safety', icon: '⚠️' },
        { id: 'hvac', name: 'HVAC', icon: '❄️' },
        { id: 'roofing', name: 'Roofing', icon: '🏠' },
        { id: 'exterior', name: 'Exterior', icon: '🏢' },
        { id: 'interior', name: 'Interior', icon: '🚪' },
        { id: 'appliances', name: 'Appliances', icon: '🔌' },
        { id: 'foundation', name: 'Foundation', icon: '🧱' },
        { id: 'windows', name: 'Windows/Doors', icon: '🪟' },
        { id: 'recommendations', name: 'Recommendations', icon: '✅' },
        { id: 'defects', name: 'Defects', icon: '❌' },
        { id: 'satisfactory', name: 'Satisfactory', icon: '👍' }
    ],
    snippets: [
        // General
        { id: 1, categoryId: 'general', title: 'Inspection Intro', text: 'This inspection report is based on a visual examination of the readily accessible areas of the property at the time of the inspection.' },
        { id: 2, categoryId: 'general', title: 'Weather Conditions', text: 'Weather conditions at the time of inspection: Clear skies with temperatures approximately 20°C (68°F).' },
        { id: 3, categoryId: 'general', title: 'Property Occupied', text: 'The property was occupied and furnished at the time of inspection, which may have limited access to some areas.' },
        { id: 4, categoryId: 'general', title: 'Age Disclaimer', text: 'Given the age of the property, the conditions noted are considered typical for properties of similar age and construction.' },

        // Electrical
        { id: 5, categoryId: 'electrical', title: 'Panel Adequate', text: 'The electrical panel appears to be adequately sized for the current usage of the property and is in serviceable condition.' },
        { id: 6, categoryId: 'electrical', title: 'GFCI Missing', text: 'GFCI (Ground Fault Circuit Interrupter) protection is recommended for outlets in wet areas such as bathrooms, kitchen, and exterior locations.' },
        { id: 7, categoryId: 'electrical', title: 'Outdated Wiring', text: 'The wiring system appears to be original to the property and may not meet current electrical codes. Recommend evaluation by a licensed electrician.' },
        { id: 8, categoryId: 'electrical', title: 'Double Tapped Breakers', text: 'Double-tapped breakers were observed in the electrical panel. This is a safety concern and should be corrected by a licensed electrician.' },

        // Plumbing
        { id: 9, categoryId: 'plumbing', title: 'No Leaks Observed', text: 'No active leaks were observed at visible supply and drain connections at the time of inspection.' },
        { id: 10, categoryId: 'plumbing', title: 'Water Heater Age', text: 'The water heater appears to be beyond its typical service life (10-15 years). Recommend budgeting for replacement in the near future.' },
        { id: 11, categoryId: 'plumbing', title: 'Slow Drain', text: 'Slow drainage was noted at this location. Recommend clearing the drain and monitoring for recurring issues.' },
        { id: 12, categoryId: 'plumbing', title: 'Water Pressure Good', text: 'Water pressure and flow appeared adequate throughout the property at the time of inspection.' },

        // Structural
        { id: 13, categoryId: 'structural', title: 'Foundation Satisfactory', text: 'The visible portions of the foundation appear to be in satisfactory condition with no significant cracks or movement observed.' },
        { id: 14, categoryId: 'structural', title: 'Minor Settlement', text: 'Minor settlement cracks were observed. These appear to be typical for the age of the structure and do not appear to indicate active structural movement.' },
        { id: 15, categoryId: 'structural', title: 'Recommend Engineer', text: 'Significant structural concerns were observed. Recommend evaluation by a licensed structural engineer prior to closing.' },

        // Safety
        { id: 16, categoryId: 'safety', title: 'Smoke Detectors', text: 'Recommend installing smoke detectors in all sleeping areas and on each level of the home per current safety standards.' },
        { id: 17, categoryId: 'safety', title: 'CO Detectors', text: 'Carbon monoxide detectors should be installed near sleeping areas and on each level with fuel-burning appliances.' },
        { id: 18, categoryId: 'safety', title: 'Handrail Missing', text: 'A handrail is recommended for stairs with more than two risers for safety purposes.' },
        { id: 19, categoryId: 'safety', title: 'Trip Hazard', text: 'A potential trip hazard was observed at this location. Recommend correction for safety.' },

        // HVAC
        { id: 20, categoryId: 'hvac', title: 'System Operational', text: 'The heating and cooling system was operational at the time of inspection and responded to normal controls.' },
        { id: 21, categoryId: 'hvac', title: 'Filter Dirty', text: 'The HVAC filter was dirty at the time of inspection. Recommend replacement and regular maintenance every 1-3 months.' },
        { id: 22, categoryId: 'hvac', title: 'System Age', text: 'The HVAC system appears to be nearing the end of its typical service life (15-20 years). Recommend budgeting for replacement.' },
        { id: 23, categoryId: 'hvac', title: 'Annual Service', text: 'Recommend annual service by a qualified HVAC technician to ensure optimal performance and longevity.' },

        // Roofing
        { id: 24, categoryId: 'roofing', title: 'Roof Satisfactory', text: 'The roof covering appears to be in serviceable condition with no obvious signs of leaks or damage visible from ground level.' },
        { id: 25, categoryId: 'roofing', title: 'Shingles Aging', text: 'The roof shingles are showing signs of age-related wear including curling and granule loss. Recommend monitoring and budgeting for replacement.' },
        { id: 26, categoryId: 'roofing', title: 'Flashing Issue', text: 'Flashing around the chimney/vent/wall junction appears deteriorated or improperly sealed. Recommend repair to prevent water intrusion.' },
        { id: 27, categoryId: 'roofing', title: 'Gutters Clogged', text: 'Gutters were clogged with debris. Recommend cleaning and regular maintenance to ensure proper drainage.' },

        // Exterior
        { id: 28, categoryId: 'exterior', title: 'Siding Good', text: 'The exterior siding appears to be in good condition with no significant damage or deterioration observed.' },
        { id: 29, categoryId: 'exterior', title: 'Caulking Needed', text: 'Caulking around windows, doors, and penetrations is deteriorated and should be renewed to prevent water intrusion.' },
        { id: 30, categoryId: 'exterior', title: 'Grading Issue', text: 'The grade slopes toward the foundation in this area. Recommend regrading to direct water away from the structure.' },
        { id: 31, categoryId: 'exterior', title: 'Paint Peeling', text: 'Paint is peeling or deteriorated in this area. Recommend scraping, priming, and repainting to protect the underlying material.' },

        // Interior
        { id: 32, categoryId: 'interior', title: 'Walls Satisfactory', text: 'Interior wall and ceiling surfaces are in overall satisfactory condition with only minor cosmetic imperfections noted.' },
        { id: 33, categoryId: 'interior', title: 'Water Stain', text: 'Water staining was observed on the ceiling/wall. Recommend identifying and correcting the source of moisture before cosmetic repair.' },
        { id: 34, categoryId: 'interior', title: 'Flooring Good', text: 'Flooring throughout the property appears to be in serviceable condition with normal wear for the age of the property.' },

        // Appliances
        { id: 35, categoryId: 'appliances', title: 'All Operational', text: 'All built-in appliances were tested and found to be operational at the time of inspection.' },
        { id: 36, categoryId: 'appliances', title: 'Dishwasher Issue', text: 'The dishwasher did not complete a full cycle or showed signs of improper operation. Recommend service or replacement.' },
        { id: 37, categoryId: 'appliances', title: 'Range Burner Out', text: 'One or more burners on the range were not functioning. Recommend repair by a qualified technician.' },

        // Foundation
        { id: 38, categoryId: 'foundation', title: 'Cracks Minor', text: 'Minor hairline cracks were observed in the foundation. These appear to be typical shrinkage cracks and do not indicate structural concern.' },
        { id: 39, categoryId: 'foundation', title: 'Moisture Evidence', text: 'Evidence of past moisture intrusion was observed in the basement/crawlspace. Recommend identifying and addressing the source.' },
        { id: 40, categoryId: 'foundation', title: 'Crawlspace Vapor', text: 'A vapor barrier is recommended in the crawlspace to help control moisture and protect floor framing.' },

        // Windows/Doors
        { id: 41, categoryId: 'windows', title: 'Windows Operational', text: 'Windows tested were operational with no broken glass or failed seals observed.' },
        { id: 42, categoryId: 'windows', title: 'Seal Failure', text: 'Failed window seals (fogging between panes) were observed indicating the insulating value has been compromised. Recommend replacement.' },
        { id: 43, categoryId: 'windows', title: 'Door Adjustment', text: 'This door does not latch or close properly. Recommend adjustment or hardware replacement.' },

        // Recommendations
        { id: 44, categoryId: 'recommendations', title: 'Priority Repairs', text: 'The following items are recommended as priority repairs to address safety concerns or prevent further damage to the property:' },
        { id: 45, categoryId: 'recommendations', title: 'Maintenance Items', text: 'The following items are maintenance recommendations to preserve the property and extend the life of its components:' },
        { id: 46, categoryId: 'recommendations', title: 'Monitor', text: 'This condition should be monitored for changes. If worsening is observed, further evaluation is recommended.' },

        // Defects
        { id: 47, categoryId: 'defects', title: 'Major Defect', text: 'This is considered a major defect that requires immediate attention and repair by a qualified professional.' },
        { id: 48, categoryId: 'defects', title: 'Safety Hazard', text: 'This condition presents a safety hazard and should be corrected immediately.' },
        { id: 49, categoryId: 'defects', title: 'Code Violation', text: 'This condition may not comply with current building codes. Recommend evaluation and correction by a licensed contractor.' },

        // Satisfactory
        { id: 50, categoryId: 'satisfactory', title: 'Good Condition', text: 'This component is in good condition and performing as intended with no repairs needed at this time.' },
        { id: 51, categoryId: 'satisfactory', title: 'Normal Wear', text: 'Normal wear consistent with the age and use of the property was observed. No action required.' },
        { id: 52, categoryId: 'satisfactory', title: 'Well Maintained', text: 'This system/component appears to have been well maintained and is in above-average condition for its age.' }
    ]
};
