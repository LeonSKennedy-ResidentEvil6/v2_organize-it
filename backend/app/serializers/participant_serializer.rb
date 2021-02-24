class ParticipantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :full_name, :email, :phone_number, :event
end
