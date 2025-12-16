import { ServiceType, ServiceConfig, ServiceLabels } from './types';

export const STATUS_LINKS = [
  { label: 'PAN Card Status (NSDL)', url: 'https://tin.tin.nsdl.com/pantan/StatusTrack.html' },
  { label: 'PAN Card Status (UTIITSL)', url: 'https://www.trackpan.utiitsl.com/PANONLINE/#forward' },
  { label: 'Aadhaar Card Status', url: 'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus' },
  { label: 'Ration Card Status (UP)', url: 'https://fcs.up.gov.in/FoodPortal.aspx' },
  { label: 'PM Kisan Beneficiary Status', url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx' },
  { label: 'Voter ID Application Status', url: 'https://voters.eci.gov.in/home/track' },
  { label: 'e-District Application Status', url: 'https://edistrict.up.gov.in/edistrictup/' },
  { label: 'Passport Application Status', url: 'https://portal2.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew' },
];

export const SERVICE_CONFIGS: Record<ServiceType, ServiceConfig> = {
  [ServiceType.PAN_NEW]: {
    type: ServiceType.PAN_NEW,
    label: 'PAN Card New',
    price: 130,
    fields: [
      { name: 'panType', label: 'PAN Card Type', type: 'select', options: ['Individual', 'Firm', 'Company', 'Trust', 'Association of Persons'], required: true },
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'middleName', label: 'Middle Name', type: 'text', required: false },
      { name: 'lastName', label: 'Last Name', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'parentName', label: 'Father/Mother Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'email', label: 'Email ID', type: 'email', required: true },
      { name: 'address', label: 'Full Residential Address', type: 'text', required: true },
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'aadhaarFile', label: 'Aadhaar Card Upload', type: 'file', required: true },
      { name: 'photoFile', label: 'Passport Photo Upload', type: 'file', required: true },
      { name: 'signatureFile', label: 'Signature/Thumb Impression Upload', type: 'file', required: true },
    ]
  },
  [ServiceType.PAN_UPDATE]: {
    type: ServiceType.PAN_UPDATE,
    label: ServiceLabels[ServiceType.PAN_UPDATE],
    price: 130,
    fields: [
      { name: 'panNumber', label: 'Existing PAN Number', type: 'text', required: true },
      { name: 'panType', label: 'PAN Card Type', type: 'select', options: ['Individual', 'Firm', 'Company', 'Trust'], required: true },
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'middleName', label: 'Middle Name', type: 'text', required: false },
      { name: 'lastName', label: 'Last Name', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'parentName', label: 'Father/Mother Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'email', label: 'Email ID', type: 'email', required: true },
      { name: 'address', label: 'Address', type: 'text', required: true },
      { name: 'correctionType', label: 'Correction Required In', type: 'select', options: ['Name', 'Date of Birth', 'Father Name', 'Address', 'Signature', 'Photo', 'Multiple Fields'], required: true },
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'panCardFile', label: 'Old PAN Card Copy', type: 'file', required: true },
      { name: 'aadhaarFile', label: 'Aadhaar Card Upload', type: 'file', required: true },
      { name: 'photoFile', label: 'Photo Upload', type: 'file', required: true },
      { name: 'signatureFile', label: 'Signature Upload', type: 'file', required: true },
    ]
  },
  [ServiceType.PAN_PRINT]: {
    type: ServiceType.PAN_PRINT,
    label: ServiceLabels[ServiceType.PAN_PRINT],
    price: 50,
    fields: [
      { name: 'panNumber', label: 'PAN Number', type: 'text', required: true },
      { name: 'applicantName', label: 'Full Name', type: 'text', required: true },
      { name: 'fatherName', label: 'Father Name', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'photoFile', label: 'Applicant Photo', type: 'file', required: true },
      { name: 'signatureFile', label: 'Applicant Signature', type: 'file', required: true },
    ]
  },
  [ServiceType.INCOME]: {
    type: ServiceType.INCOME,
    label: ServiceLabels[ServiceType.INCOME],
    price: 30,
    fields: [
      { name: 'applicantName', label: 'Applicant Name', type: 'text', required: true },
      { name: 'fatherHusbandName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'motherName', label: 'Mother Name', type: 'text', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'subDistrict', label: 'Sub-District', type: 'text', required: true },
      { name: 'village', label: 'Village/Town', type: 'text', required: true },
      { name: 'wardNo', label: 'Ward No', type: 'text', required: false },
      { name: 'postOffice', label: 'Post Office', type: 'text', required: true },
      { name: 'policeStation', label: 'Thana (Police Station)', type: 'text', required: true },
      { name: 'annualIncome', label: 'Annual Income (Rs)', type: 'number', required: true },
      { name: 'photo', label: 'Photo Upload', type: 'file', required: true },
      { name: 'selfDeclaration', label: 'Self Declaration Certificate', type: 'file', required: true },
      { name: 'aadhaar', label: 'Aadhaar Card (Color)', type: 'file', required: true },
      { name: 'salarySlip', label: 'Salary Slip', type: 'file', required: false },
    ]
  },
  [ServiceType.CASTE]: {
    type: ServiceType.CASTE,
    label: ServiceLabels[ServiceType.CASTE],
    price: 30,
    fields: [
      { name: 'applicantName', label: 'Applicant Name', type: 'text', required: true },
      { name: 'fatherHusbandName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'motherName', label: 'Mother Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'subDistrict', label: 'Sub-District', type: 'text', required: true },
      { name: 'village', label: 'Village/Town', type: 'text', required: true },
      { name: 'wardNo', label: 'Ward No', type: 'text', required: false },
      { name: 'postOffice', label: 'Post Office', type: 'text', required: true },
      { name: 'policeStation', label: 'Thana (Police Station)', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'select', options: ['BC-I', 'BC-II', 'SC', 'ST', 'General'], required: true },
      { name: 'jati', label: 'Jati (Caste)', type: 'text', required: true },
      { name: 'photo', label: 'Photo Upload', type: 'file', required: true },
      { name: 'selfDeclaration', label: 'Self Declaration Certificate', type: 'file', required: true },
      { name: 'aadhaar', label: 'Aadhaar Card (Color)', type: 'file', required: true },
    ]
  },
  [ServiceType.DOMICILE]: {
    type: ServiceType.DOMICILE,
    label: ServiceLabels[ServiceType.DOMICILE],
    price: 30,
    fields: [
      { name: 'applicantName', label: 'Name', type: 'text', required: true },
      { name: 'parentName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'motherName', label: 'Mother Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'subDistrict', label: 'Sub-District', type: 'text', required: true },
      { name: 'village', label: 'Village/Town', type: 'text', required: true },
      { name: 'wardNo', label: 'Ward No', type: 'text', required: false },
      { name: 'postOffice', label: 'Post Office', type: 'text', required: true },
      { name: 'policeStation', label: 'Thana (Police Station)', type: 'text', required: true },
      { name: 'photo', label: 'Photo Upload', type: 'file', required: true },
      { name: 'selfDeclaration', label: 'Self Declaration Certificate', type: 'file', required: true },
      { name: 'aadhaar', label: 'Aadhaar Card (Color)', type: 'file', required: true },
    ]
  },
  [ServiceType.RATION_NEW]: {
    type: ServiceType.RATION_NEW,
    label: ServiceLabels[ServiceType.RATION_NEW],
    price: 50,
    fields: [
      { name: 'headOfFamily', label: 'Head of Family Name (Lady)', type: 'text', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Female', 'Male', 'Transgender'], required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'fatherHusbandName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'motherName', label: 'Mother Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'select', options: ['General', 'BC', 'SC', 'ST'], required: true },
      { name: 'cardType', label: 'Card Type', type: 'select', options: ['APL', 'BPL', 'AAY (Antyodaya)'], required: true },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'blockMunicipality', label: 'Block/Municipality', type: 'text', required: true },
      { name: 'villageWard', label: 'Village/Ward', type: 'text', required: true },
      { name: 'pincode', label: 'Pincode', type: 'text', required: true },
      { name: 'bankName', label: 'Bank Name', type: 'text', required: true },
      { name: 'accountNumber', label: 'Account Number', type: 'text', required: true },
      { name: 'ifscCode', label: 'IFSC Code', type: 'text', required: true },
      { name: 'gasConnection', label: 'Gas Connection', type: 'select', options: ['No Connection', 'Deepam', 'Double Cylinder', 'Single Cylinder'], required: true },
      { name: 'unitsList', label: 'Add More Units (Family Members)', type: 'member_list', required: false },
      { name: 'photoFile', label: 'Family Photo Upload', type: 'file', required: true },
      { name: 'aadhaarFile', label: 'Aadhaar Card Upload (Head)', type: 'file', required: true },
      { name: 'bankPassbookFile', label: 'Bank Passbook Upload', type: 'file', required: true },
      { name: 'residenceProofFile', label: 'Residence Proof/Electricity Bill', type: 'file', required: true },
    ]
  },
  [ServiceType.RATION_UPDATE]: {
    type: ServiceType.RATION_UPDATE,
    label: ServiceLabels[ServiceType.RATION_UPDATE],
    price: 50,
    fields: [
      { name: 'rationCardNo', label: 'Ration Card No', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'updateDetails', label: 'Details to Update', type: 'text', required: true },
    ]
  },
  [ServiceType.RATION_PRINT]: {
    type: ServiceType.RATION_PRINT,
    label: ServiceLabels[ServiceType.RATION_PRINT],
    price: 30,
    fields: [
      { name: 'rationCardNo', label: 'Ration Card No', type: 'text', required: true },
      { name: 'headOfFamily', label: 'Head of Family Name', type: 'text', required: true },
      { name: 'fatherHusbandName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'address', label: 'Full Address', type: 'text', required: true },
      { name: 'photoFile', label: 'Family Photo', type: 'file', required: true },
    ]
  },
  [ServiceType.VOTER_PRINT]: {
    type: ServiceType.VOTER_PRINT,
    label: ServiceLabels[ServiceType.VOTER_PRINT],
    price: 50,
    fields: [
      { name: 'epicNo', label: 'EPIC No (Voter ID)', type: 'text', required: true },
      { name: 'applicantName', label: 'Full Name', type: 'text', required: true },
      { name: 'fatherName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'dob', label: 'Date of Birth / Age', type: 'text', required: true },
      { name: 'address', label: 'Address', type: 'text', required: true },
      { name: 'photoFile', label: 'Voter Photo', type: 'file', required: true },
    ]
  },
  [ServiceType.AADHAAR_PRINT]: {
    type: ServiceType.AADHAAR_PRINT,
    label: ServiceLabels[ServiceType.AADHAAR_PRINT],
    price: 50,
    fields: [
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'applicantName', label: 'Full Name', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'address', label: 'Address (Full with Pincode)', type: 'text', required: true },
      { name: 'photoFile', label: 'Aadhaar Photo', type: 'file', required: true },
    ]
  },
  [ServiceType.FAMILY_PRINT]: {
    type: ServiceType.FAMILY_PRINT,
    label: ServiceLabels[ServiceType.FAMILY_PRINT],
    price: 30,
    fields: [
      { name: 'familyId', label: 'Family ID', type: 'text', required: true },
      { name: 'headName', label: 'Head of Family', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.MNREGA_JOB_CARD]: {
    type: ServiceType.MNREGA_JOB_CARD,
    label: ServiceLabels[ServiceType.MNREGA_JOB_CARD],
    price: 0,
    externalLink: 'https://nregastrep.nic.in/netnrega/Homedist.aspx?flag_debited=&is_statefund=&lflag=eng&district_code=3124&district_name=BUDAUN&state_name=UTTAR%20PRADESH&state_Code=31',
    fields: [
      { name: 'headOfFamily', label: 'Head of Household Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'village', label: 'Village', type: 'text', required: true },
    ]
  },
  [ServiceType.AADHAAR_LINK]: {
    type: ServiceType.AADHAAR_LINK,
    label: ServiceLabels[ServiceType.AADHAAR_LINK],
    price: 120,
    externalLink: 'https://form.svhrt.com/693ae4d9307197e0032b7452',
    fields: [
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'applicantName', label: 'Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.PM_KISAN_NEW]: {
    type: ServiceType.PM_KISAN_NEW,
    label: ServiceLabels[ServiceType.PM_KISAN_NEW],
    price: 0,
    externalLink: 'https://www.pmkisan.gov.in/RegistrationFormupdated.aspx',
    fields: [
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'farmerName', label: 'Farmer Name', type: 'text', required: true },
    ]
  },
  [ServiceType.FAMILY_ID_NEW]: {
    type: ServiceType.FAMILY_ID_NEW,
    label: ServiceLabels[ServiceType.FAMILY_ID_NEW],
    price: 60,
    fields: [
      { name: 'headName', label: 'Family Head Name', type: 'text', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number (Linked with Aadhaar)', type: 'tel', required: true },
      { name: 'address', label: 'Full Residential Address', type: 'text', required: true },
      { name: 'membersList', label: 'Family Members', type: 'member_list', required: false },
    ]
  },
  [ServiceType.CYBER_CRIME]: {
    type: ServiceType.CYBER_CRIME,
    label: ServiceLabels[ServiceType.CYBER_CRIME],
    price: 0,
    externalLink: 'https://cybercrime.gov.in/',
    fields: [
      { name: 'complainantName', label: 'Complainant Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'incidentDate', label: 'Date of Incident', type: 'date', required: false },
    ]
  },
  [ServiceType.CHARACTER_CERT]: {
    type: ServiceType.CHARACTER_CERT,
    label: ServiceLabels[ServiceType.CHARACTER_CERT],
    price: 90,
    fields: [
      { name: 'applicantName', label: 'Full Name', type: 'text', required: true },
      { name: 'fatherName', label: 'Father Name', type: 'text', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Transgender'], required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'email', label: 'Email ID', type: 'email', required: false },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'policeStation', label: 'Police Station', type: 'text', required: true },
      { name: 'address', label: 'Permanent Address', type: 'text', required: true },
      { name: 'purpose', label: 'Purpose of Certificate', type: 'text', required: true },
      { name: 'photoFile', label: 'Applicant Photo', type: 'file', required: true },
      { name: 'aadhaarFile', label: 'Aadhaar Card Upload', type: 'file', required: true },
    ]
  },
  // --- New Free Services ---
  [ServiceType.AADHAAR_PORTAL]: {
    type: ServiceType.AADHAAR_PORTAL,
    label: ServiceLabels[ServiceType.AADHAAR_PORTAL],
    price: 0,
    externalLink: 'https://myaadhaar.uidai.gov.in/',
    fields: [
      { name: 'applicantName', label: 'Customer Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.VOTER_PORTAL]: {
    type: ServiceType.VOTER_PORTAL,
    label: ServiceLabels[ServiceType.VOTER_PORTAL],
    price: 0,
    externalLink: 'https://voters.eci.gov.in/',
    fields: [
      { name: 'applicantName', label: 'Customer Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.POLICE_FIR]: {
    type: ServiceType.POLICE_FIR,
    label: ServiceLabels[ServiceType.POLICE_FIR],
    price: 0,
    externalLink: 'https://uppolice.gov.in/',
    fields: [
      { name: 'applicantName', label: 'Complainant Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.VIRASAT]: {
    type: ServiceType.VIRASAT,
    label: ServiceLabels[ServiceType.VIRASAT],
    price: 50,
    fields: [
      { name: 'applicantName', label: 'Applicant Name', type: 'text', required: true },
      { name: 'fatherHusbandName', label: 'Father/Husband Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'aadhaarNumber', label: 'Applicant Aadhaar', type: 'text', required: true },
      { name: 'deceasedName', label: 'Deceased Landholder Name', type: 'text', required: true },
      { name: 'dateOfDeath', label: 'Date of Death', type: 'date', required: true },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'tehsil', label: 'Tehsil', type: 'text', required: true },
      { name: 'village', label: 'Village', type: 'text', required: true },
      { name: 'khataNo', label: 'Khata Number', type: 'text', required: true },
      { name: 'heirsList', label: 'Legal Heirs (Name, Relation, Age)', type: 'member_list', required: true },
      { name: 'deathCertificate', label: 'Death Certificate Upload', type: 'file', required: true },
    ]
  },
  [ServiceType.RTI]: {
    type: ServiceType.RTI,
    label: ServiceLabels[ServiceType.RTI],
    price: 0,
    externalLink: 'https://rtionline.gov.in/',
    fields: [
      { name: 'applicantName', label: 'Applicant Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.JOB_NOTIFICATIONS]: {
    type: ServiceType.JOB_NOTIFICATIONS,
    label: ServiceLabels[ServiceType.JOB_NOTIFICATIONS],
    price: 0,
    externalLink: 'https://www.ncs.gov.in',
    fields: [
      { name: 'applicantName', label: 'Job Seeker Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
  [ServiceType.SEVAYOJAN]: {
    type: ServiceType.SEVAYOJAN,
    label: ServiceLabels[ServiceType.SEVAYOJAN],
    price: 0,
    externalLink: 'https://sewayojan.up.nic.in/',
    fields: [
      { name: 'applicantName', label: 'Applicant Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
    ]
  },
};