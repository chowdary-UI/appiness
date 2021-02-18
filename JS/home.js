var wizards = [
    'Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.',
    'Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.',
    'Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.',
    'Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.',
    'Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.'
];

// Get the app element
var app = document.querySelector('#app');

// Create markup
app.innerHTML = '<ul class="types">' + wizards.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('') + '</ul>';