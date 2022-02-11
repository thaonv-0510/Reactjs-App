class ApplicationController < ActionController::Base
  before_action :set_locale

  def set_locale
    I18n.locale = locale_in_accept_language || I18n.default_locale
  end

  def locale_in_accept_language
    request.env['HTTP_ACCEPT_LANGUAGE']
           .to_s
           .split(',')
           .map { |lang| lang[0..1].to_sym }
           .select { |lang| I18n.available_locales.include?(lang) }
           .first
  end
end
