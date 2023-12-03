

const query1 = `
PREFIX healthcare: <http://www.semanticweb.org/healthcare/ontology#>

select distinct ?id ?name ?dob ?ssn
FROM <tag:stardog:api:context:default>
FROM <tag:stardog:designer:SER531:model>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_organizations>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_modality>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_medications>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_careplans>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_bodysite_studies>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_procedures>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_encounters>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_imaging_studies>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_patients>
FROM <tag:stardog:designer:SER_531:data:cleaned_data_patients_personal_infromation>
WHERE {
{
    ?patient a healthcare:Patient ;
            healthcare:has_Patient_ID ?id ;
            healthcare:has_personal_info ?info .
    ?info healthcare:has_Patient_Name ?name ;
        healthcare:has_patient_DOB ?dob ;
        healthcare:has_patient_SSN ?ssn .
}
}
`;

const QueryService = {
    query1,
};

export default QueryService;