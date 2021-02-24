class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :participants
end
