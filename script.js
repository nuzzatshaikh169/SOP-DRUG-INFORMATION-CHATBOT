function searchDrug() {

    let drug = document.getElementById("drugInput").value.toLowerCase();

    const drugs = {

        paracetamol: {
            name: "Paracetamol",
            dosage: "500mg to 1000mg every 4-6 hours.",
            uses: "Used to reduce fever and relieve mild to moderate pain.",
            precautions: "Avoid overdose. Use carefully in liver disease."
        },

        ibuprofen: {
            name: "Ibuprofen",
            dosage: "200mg to 400mg every 6-8 hours.",
            uses: "Used for pain relief, inflammation, and fever.",
            precautions: "Take after food. Avoid in stomach ulcer patients."
        },

        aspirin: {
            name: "Aspirin",
            dosage: "300mg once daily.",
            uses: "Used for pain relief and blood thinning.",
            precautions: "Avoid during bleeding disorders and stomach ulcers."
        }

    };

    if (drugs[drug]) {

        document.getElementById("drugName").innerText = drugs[drug].name;
        document.getElementById("dosage").innerText = drugs[drug].dosage;
        document.getElementById("uses").innerText = drugs[drug].uses;
        document.getElementById("precautions").innerText = drugs[drug].precautions;

    } else {

        document.getElementById("drugName").innerText = "Drug Not Found";
        document.getElementById("dosage").innerText = "-";
        document.getElementById("uses").innerText = "-";
        document.getElementById("precautions").innerText = "-";
    }
}
