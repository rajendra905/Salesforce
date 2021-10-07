public with sharing class ContactControllerLWC {
    public ContactControllerLWC() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> allcontactList(){
        return [select Id , Name, Email ,Phone, Fax , BirthDate from Contact];
    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> contactList(Integer recordLimit){
        return [select Id , Name, Email ,Phone, Fax , BirthDate from Contact LIMIT :recordLimit];
    }

    @AuraEnabled
    public static Contact contactDetailList(string  contactId){
        return [select Id , Name, Email ,Phone, Fax , Birthdate ,Account.Name , Account.Rating,Account.Phone,Account.CustomerPriority__c from Contact where Id =:contactId];
    }

    @AuraEnabled
    public static String saveTask(String subject,String priority,String contactId,String accountId){
        Task t=new Task();
       t.Subject=subject;
       t.Priority=priority;
       t.WhoId=contactId;
       t.WhatId=accountId;
       t.OwnerId=UserInfo.getUserId();
       t.ActivityDate=Date.today()+2;
       insert t;
       return 'success';
        
    }
    @AuraEnabled
    public static string deleteContact(String contactId){
        System.debug('contactId'+contactId);
        
        
        try {
            delete [select Id from Contact WHERE Id  =: contactId];
            return 'success';
        } catch (Exception e) {
            return 'error';
        }
    }
}
