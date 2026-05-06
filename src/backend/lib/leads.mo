import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/leads";

module {
  public type Lead = Types.Lead;

  public func submit(
    leads : List.List<Lead>,
    nextId : Nat,
    name : Text,
    businessType : Text,
    requirement : Text,
  ) : (Lead, Nat) {
    let lead : Lead = {
      id = nextId;
      name = name;
      businessType = businessType;
      requirement = requirement;
      timestamp = Time.now();
    };
    leads.add(lead);
    (lead, nextId + 1);
  };

  public func list(leads : List.List<Lead>) : [Lead] {
    leads.toArray();
  };
};
