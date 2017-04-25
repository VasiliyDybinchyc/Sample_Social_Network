Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github,        'f2c1df42890bbb363eaa',   '42971f2fb9637f036bf0d5fc1acd618b1951f04a',   scope: 'email,profile'
end
