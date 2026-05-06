import List "mo:core/List";
import Types "types/leads";
import LeadsApi "mixins/leads-api";

actor {
  let leads = List.empty<Types.Lead>();
  let leadCounter = { var value : Nat = 0 };

  include LeadsApi(leads, leadCounter);
};
