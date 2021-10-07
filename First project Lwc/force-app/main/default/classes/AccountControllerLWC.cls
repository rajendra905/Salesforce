public  class AccountControllerLWC {
    public AccountControllerLWC() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Account> accountList(){
        return [select Id , Name, AccountNumber,Phone,Website, Rating from Account];
    }
    @AuraEnabled
    public static List<Account> accountViewList(String accountId){
        return [select Id , Name, AccountNumber, Phone, Website, Rating from Account where id =:accountId];
        // System.debug('accountId'+accountId);
        // try {
           
        // //return 'success';
        // } catch (Exception e) {
        //     return e;
        // }
    }

    @AuraEnabled
    public static string deleteAccount(String accountId){
        System.debug('accountId'+accountId);
        try {
            delete [select Id from Account WHERE id  =: accountId];
            return 'success';
        } catch (Exception e) {
            return 'error';
        }
    }
    @AuraEnabled
    public static Account accountClone(Account newAccountClone){
        upsert newAccountClone;
        return null;
        
    }
   
}
