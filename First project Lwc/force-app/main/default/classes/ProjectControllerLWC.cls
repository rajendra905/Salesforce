public  class ProjectControllerLWC {
    public ProjectControllerLWC() {

    }
    @AuraEnabled
    public static Project__c projectStatus(Id projectId){
        return [select Id , Status__c from Project__c where Id =:projectId];
    }
}
