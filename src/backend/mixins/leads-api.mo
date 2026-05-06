import List "mo:core/List";
import LeadsLib "../lib/leads";
import Types "../types/leads";

mixin (leads : List.List<Types.Lead>, counter : { var value : Nat }) {
  public func submitLead(
    name : Text,
    businessType : Text,
    requirement : Text,
  ) : async { id : Nat } {
    let (lead, newId) = LeadsLib.submit(leads, counter.value, name, businessType, requirement);
    counter.value := newId;
    { id = lead.id };
  };

  public query func getLeads() : async [Types.Lead] {
    LeadsLib.list(leads);
  };
};
