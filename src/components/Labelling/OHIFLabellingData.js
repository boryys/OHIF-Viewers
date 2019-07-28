/*const items = [
  'Abdomen/Chest Wall',
  'Adrenal',
  'Bladder',
  'Bone',
  'Brain',
  'Breast',
  'Colon',
  'Esophagus',
  'Extremities',
  'Gallbladder',
  'Kidney',
  'Liver',
  'Lung',
  'Lymph Node',
  'Mediastinum/Hilum',
  'Muscle',
  'Neck',
  'Other Soft Tissue',
  'Ovary',
  'Pancreas',
  'Pelvis',
  'Peritoneum/Omentum',
  'Prostate',
  'Retroperitoneum',
  'Small Bowel',
  'Spleen',
  'Stomach',
  'Subcutaneous',
];*/

const items = [
  'Zmiana1',
  'Zmiana2',
  'Zmiana3',
  'Zmiana4',
  'Zmiana5',
  'Zmiana6',
  'Zmiana7',
  'Zmiana8',
  'Zmiana9',
  'Zmiana10',
];

const OHIFLabellingData = items.map(item => {
  return {
    label: item,
    value: item,
  };
});

export default OHIFLabellingData;
