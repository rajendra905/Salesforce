public class getRouteStationApiLWC {
    public getRouteStationApiLWC() {

    }
    public class deserializeResponse
    {
        public String id;
        public String access_token;
    }
    public static Http http = new Http();
    public static HTTPResponse response;
    public static HttpRequest request;
    @AuraEnabled
    public static String getRouteStation(string Departure, String Arrival) {

        request = new HttpRequest();
        request.setMethod('GET');
        request.setEndpoint('callout:HemaOrg/services/apexrest/Route_Station__c/' + Departure +',' +Arrival);
        response = http.send(request);
        //Map<String, Object> jsonBody = (Map<String, Object>)Json.deserializeUntyped(response.getBody());
        return response.getBody();
        // if(response.getStatusCode() == 200) {
        //     return
        //     JSON.deserialize(jsonString, apexType) response.getBody();
        // } else {
        //     return null;
        // }   
    }
}