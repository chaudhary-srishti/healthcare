

const getQueryResults = async () => {

    var header = {
        "Content-Type": "application/sparql-query",
        "Authorization": "Basic " + btoa("SERAdmin:admin@ser531")
    };

    var body = `
    SELECT DISTINCT ?subject_0
    FROM <tag:stardog:api:context:default>
    FROM <tag:stardog:designer:Healthcare:model>
    FROM <tag:stardog:designer:Healthcare:data:cleaned_dataset>
    FROM <tag:stardog:designer:Healthcare:data:covid_info>
    FROM <urn:stardog:marketplace:tutorials:music:1.0>
    FROM <stardog-tutorial:music:music_data>
    FROM <stardog-tutorial-music:music_schema>
    WHERE {
    {
        ?subject_0 a <http://www.semanticweb.org/healthcare/ontology#CovidStats> .
        ?subject_0 <http://www.semanticweb.org/healthcare/ontology#covid_intubation_status> ?dat_0 . FILTER(STR(?dat_0) = "1") .
    }
    }
    `;

    return fetch(
        `https://sd-90a47ad8.stardog.cloud:5820/healthcare/query`, 
        { method: 'POST', headers: header, body: body }
    );
}

const QueryService = {
    getQueryResults,
};

export default QueryService;