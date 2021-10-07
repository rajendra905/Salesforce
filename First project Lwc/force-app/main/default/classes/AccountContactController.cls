public class AccountContactController {
    public AccountContactController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Account> accountList(){
        return [select Id , Name, AccountNumber,Phone,Website, Rating from Account];
    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> contactList(Id accountId){
        System.debug('accountId'+accountId);
        return [select Id , Name, Email ,Phone, Fax , BirthDate from Contact where AccountId =:accountId];
    }
    @AuraEnabled
    public static void deleteContact(List<String> contactId){
        List<Contact> conItem = new   List<Contact>();
        List<Contact> conList = [Select Id, Name  From Contact Where Id IN:contactId];
        for(Contact con:conList){
            conItem.add(con);
        }
        if(conItem.size()>0){
            try{
              delete conItem;           
            }
            catch (Exception exp) {
              
          }
        }
    
    }
}
