// script.js

const drugs = [
  {
    name: "Paracetamol",
    dosage: "500–650 mg every 4–6 hrs",
    uses: "Fever, mild pain",
    sideEffects: "Nausea, rash",
    precautions: "Avoid overdose in liver disease"
  },
  {
    name: "Ibuprofen",
    dosage: "200–400 mg every 6–8 hrs",
    uses: "Pain, inflammation",
    sideEffects: "Gastric irritation",
    precautions: "Avoid in ulcers and kidney disease"
  },
  {
    name: "Aspirin",
    dosage: "75–325 mg daily",
    uses: "Pain, blood thinning",
    sideEffects: "Bleeding, stomach upset",
    precautions: "Avoid in children with viral illness"
  },
  {
    name: "Cetirizine",
    dosage: "10 mg daily",
    uses: "Allergy relief",
    sideEffects: "Drowsiness, dry mouth",
    precautions: "Avoid alcohol while taking"
  },
  {
    name: "Levocetirizine",
    dosage: "5 mg daily",
    uses: "Allergic rhinitis",
    sideEffects: "Sleepiness",
    precautions: "Use cautiously while driving"
  },
  {
    name: "Diphenhydramine",
    dosage: "25–50 mg",
    uses: "Allergy, cold symptoms",
    sideEffects: "Sedation, dizziness",
    precautions: "Avoid operating machinery"
  },
  {
    name: "Loratadine",
    dosage: "10 mg daily",
    uses: "Allergies",
    sideEffects: "Headache, fatigue",
    precautions: "Use cautiously in liver disease"
  },
  {
    name: "Fexofenadine",
    dosage: "120–180 mg daily",
    uses: "Allergies",
    sideEffects: "Headache, nausea",
    precautions: "Avoid fruit juice with dose"
  },
  {
    name: "Omeprazole",
    dosage: "20–40 mg daily",
    uses: "Acidity, GERD",
    sideEffects: "Headache, diarrhea",
    precautions: "Long-term use may lower vitamin B12"
  },
  {
    name: "Pantoprazole",
    dosage: "40 mg daily",
    uses: "Acid reflux",
    sideEffects: "Dizziness, nausea",
    precautions: "Avoid unnecessary long-term use"
  },
  {
    name: "Metformin",
    dosage: "500–1000 mg twice daily",
    uses: "Type 2 diabetes",
    sideEffects: "Diarrhea, nausea",
    precautions: "Avoid in severe kidney disease"
  },
  {
    name: "Amlodipine",
    dosage: "5–10 mg daily",
    uses: "Hypertension",
    sideEffects: "Swelling, dizziness",
    precautions: "Monitor blood pressure"
  },
  {
    name: "Atorvastatin",
    dosage: "10–40 mg daily",
    uses: "High cholesterol",
    sideEffects: "Muscle pain",
    precautions: "Monitor liver function"
  },
  {
    name: "Amoxicillin",
    dosage: "250–500 mg three times daily",
    uses: "Bacterial infections",
    sideEffects: "Rash, diarrhea",
    precautions: "Complete full course"
  },
  {
    name: "Azithromycin",
    dosage: "500 mg daily",
    uses: "Respiratory infections",
    sideEffects: "Nausea",
    precautions: "Avoid unnecessary use"
  },
  {
    name: "Ciprofloxacin",
    dosage: "250–500 mg twice daily",
    uses: "UTIs, infections",
    sideEffects: "Tendon pain",
    precautions: "Avoid dairy near dose time"
  },
  {
    name: "Doxycycline",
    dosage: "100 mg twice daily",
    uses: "Acne, infections",
    sideEffects: "Photosensitivity",
    precautions: "Avoid lying down immediately"
  },
  {
    name: "Fluconazole",
    dosage: "150–400 mg",
    uses: "Fungal infections",
    sideEffects: "Headache",
    precautions: "Monitor liver health"
  },
  {
    name: "Albendazole",
    dosage: "400 mg single dose",
    uses: "Worm infestations",
    sideEffects: "Abdominal pain",
    precautions: "Avoid during pregnancy"
  },
  {
    name: "Salbutamol",
    dosage: "2–4 mg or inhaler",
    uses: "Asthma relief",
    sideEffects: "Tremors",
    precautions: "Do not overuse inhaler"
  },
  {
    name: "Prednisolone",
    dosage: "5–60 mg daily",
    uses: "Inflammation",
    sideEffects: "Weight gain",
    precautions: "Do not stop abruptly"
  },
  {
    name: "Diclofenac",
    dosage: "50 mg twice daily",
    uses: "Pain relief",
    sideEffects: "Gastric irritation",
    precautions: "Take after food"
  },
  {
    name: "Tramadol",
    dosage: "50–100 mg",
    uses: "Moderate pain",
    sideEffects: "Dizziness",
    precautions: "Avoid alcohol"
  },
  {
    name: "Diazepam",
    dosage: "2–10 mg",
    uses: "Anxiety, seizures",
    sideEffects: "Drowsiness",
    precautions: "Risk of dependence"
  },
  {
    name: "Alprazolam",
    dosage: "0.25–0.5 mg",
    uses: "Anxiety",
    sideEffects: "Sleepiness",
    precautions: "Avoid abrupt discontinuation"
  },
  {
    name: "Sertraline",
    dosage: "50–100 mg daily",
    uses: "Depression",
    sideEffects: "Nausea",
    precautions: "May take weeks to work"
  },
  {
    name: "Ondansetron",
    dosage: "4–8 mg",
    uses: "Nausea",
    sideEffects: "Constipation",
    precautions: "Monitor heart rhythm"
  },
  {
    name: "Lactulose",
    dosage: "15–30 ml",
    uses: "Constipation",
    sideEffects: "Bloating",
    precautions: "Drink enough water"
  },
  {
    name: "Nitroglycerin",
    dosage: "As prescribed",
    uses: "Chest pain",
    sideEffects: "Headache",
    precautions: "Sit while taking"
  },
  {
    name: "Levothyroxine",
    dosage: "As prescribed",
    uses: "Hypothyroidism",
    sideEffects: "Palpitations",
    precautions: "Take on empty stomach"
  },
  {
    name: "Allopurinol",
    dosage: "100–300 mg daily",
    uses: "Gout prevention",
    sideEffects: "Rash",
    precautions: "Maintain hydration"
  },
  {
    name: "Calcium Carbonate",
    dosage: "500–1000 mg",
    uses: "Calcium deficiency",
    sideEffects: "Constipation",
    precautions: "Avoid excess use"
  },
  {
    name: "Vitamin D3",
    dosage: "600–2000 IU daily",
    uses: "Bone health",
    sideEffects: "Nausea",
    precautions: "Avoid overdose"
  },
  {
    name: "Ferrous Sulfate",
    dosage: "325 mg daily",
    uses: "Iron deficiency anemia",
    sideEffects: "Constipation",
    precautions: "Keep away from children"
  },
  {
    name: "ORS Solution",
    dosage: "As needed",
    uses: "Dehydration",
    sideEffects: "Bloating",
    precautions: "Prepare correctly"
  },
  {
    name: "Oseltamivir",
    dosage: "75 mg twice daily",
    uses: "Influenza",
    sideEffects: "Nausea",
    precautions: "Start early after symptoms"
  },
  {
    name: "Acyclovir",
    dosage: "200–400 mg",
    uses: "Herpes infections",
    sideEffects: "Headache",
    precautions: "Maintain hydration"
  },
  {
    name: "Empagliflozin",
    dosage: "10–25 mg daily",
    uses: "Type 2 diabetes",
    sideEffects: "Urinary infections",
    precautions: "Drink enough water"
  },
  {
    name: "Sildenafil",
    dosage: "25–100 mg",
    uses: "Erectile dysfunction",
    sideEffects: "Headache",
    precautions: "Avoid with nitrates"
  },
  {
    name: "Tamsulosin",
    dosage: "0.4 mg daily",
    uses: "Benign prostate enlargement",
    sideEffects: "Dizziness",
    precautions: "Rise slowly from sitting"
  },
  {
    name: "Methotrexate",
    dosage: "Weekly dose as prescribed",
    uses: "Rheumatoid arthritis",
    sideEffects: "Liver toxicity",
    precautions: "Take only once weekly"
  },
  {
    name: "Isotretinoin",
    dosage: "0.5–1 mg/kg daily",
    uses: "Severe acne",
    sideEffects: "Dry skin",
    precautions: "Avoid pregnancy"
  }
];

// Search Function
function searchDrug() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const drug = drugs.find(d => d.name.toLowerCase() === input);

  if (drug) {
    resultDiv.innerHTML = `
      <div class="drug-card">
        <h2>${drug.name}</h2>
        <p><strong>Dosage:</strong> ${drug.dosage}</p>
        <p><strong>Uses:</strong> ${drug.uses}</p>
        <p><strong>Side Effects:</strong> ${drug.sideEffects}</p>
        <p><strong>Precautions:</strong> ${drug.precautions}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `<p>Drug not found.</p>`;
  }
}
