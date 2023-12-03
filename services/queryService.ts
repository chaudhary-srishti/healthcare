

const getQuery1 = () => {
    const query = `
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

    return query;
} 

const getQuery2 = (patient_ID: string) => {
    const query = `
        PREFIX healthcare: <http://www.semanticweb.org/healthcare/ontology#>

        SELECT DISTINCT ?id ?desc ?cost
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
                    healthcare:has_medication ?medication .
            ?medication healthcare:has_medication_description ?desc ;
                        healthcare:has_medication_base_cost ?cost .
            FILTER (?id="${patient_ID}") .
        }
        }
    `;

    return query;
} 

const getQuery3 = (year: string) => {
    const query = `
    PREFIX healthcare: <http://www.semanticweb.org/healthcare/ontology#>

    SELECT DISTINCT ?id ?desc ?year
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
                 healthcare:has_procedures ?procedure .
        ?procedure healthcare:has_procedure_description ?desc ;
                   healthcare:has_procedure_start ?start .
        BIND(year(?start) AS ?year)
        FILTER(?year=${year}) .
      }
    }
    `;

    return query;
}

const getQuery4 = () => {
    const query = `
    PREFIX healthcare: <http://www.semanticweb.org/healthcare/ontology#>

    SELECT ?category (COUNT(?patient) AS ?count)
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
                healthcare:has_careplan ?careplan .
        ?careplan healthcare:careplan_has_encounter ?encounter .
        ?encounter healthcare:has_encounter_category ?category .
    }
    }
    GROUP BY ?category
    `;

    return query;
}

const getQuery5 = () => {
    const query = `
    PREFIX healthcare: <http://www.semanticweb.org/healthcare/ontology#>

    SELECT DISTINCT ?name 
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
    FROM <tag:stardog:designer:SER_531:data:cleaned_dataset_covid>
    FROM <tag:stardog:designer:SER_531:data:cleaned_dataset_hospital>
    FROM <tag:stardog:designer:SER_531:data:cleaned_data_hospital_NAICS>
    WHERE {
    {
        ?obj_0 a healthcare:Hospital;
                healthcare:has_hospital_name ?name.
        ?obj_1 a healthcare:NAICS_Code .
        ?obj_0 healthcare:hospital_has_NAICS ?obj_1 .
        ?obj_1 healthcare:has_NAICS_Category ?dat_0 . FILTER(STR(?dat_0) = "GENERAL MEDICAL AND SURGICAL HOSPITALS") .
    }
    }
    `;

    return query;
}

const getQuery6 = () => {
    const query = `
    PREFIX healthcare: <http://www.semanticweb.org/healthcare/ontology#>
    PREFIx xml: <http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT ?id
    FROM <tag:stardog:api:context:default>
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
    FROM <tag:stardog:designer:SER_531:data:cleaned_dataset_covid>
    FROM <tag:stardog:designer:SER_531:data:cleaned_dataset_hospital>
    FROM <tag:stardog:designer:SER_531:data:cleaned_data_hospital_NAICS>
    WHERE {
    {
        ?obj_0 a healthcare:Patient ;
                healthcare:has_Patient_ID ?id ;
                healthcare:has_covid_stats ?obj_1 .
        ?obj_1 healthcare:covid_severity ?dat_0 . FILTER(STR(?dat_0) = "2") .

        ?obj_2 a healthcare:PatientPersonalInformation .
        ?obj_0 healthcare:has_personal_info ?obj_2 .
        ?obj_2 healthcare:has_patient_DOD ?dat_1 . FILTER(?dat_1 > "2019-12-01T00:00:00"^^xml:dateTime) .
    } UNION {
        ?obj_3 a healthcare:Patient;
                healthcare:has_covid_stats ?obj_4 .
        ?obj_4 healthcare:covid_severity ?dat_2 . FILTER(STR(?dat_2) = "1") .

        ?obj_5 a healthcare:PatientPersonalInformation .
        ?obj_3 healthcare:has_personal_info ?obj_5 .
        ?obj_5 healthcare:has_patient_DOD ?dat_3 . FILTER(?dat_3 > "2019-12-01T00:00:00"^^xml:dateTime) .
    }
    }
    `;

    return query;
}



const QueryService = {
    getQuery1,
    getQuery2,
    getQuery3,
    getQuery4,
    getQuery5,
    getQuery6
};

export default QueryService;