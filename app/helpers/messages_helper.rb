module MessagesHelper
  def youtube_embed(youtube_url)
    if youtube_url[/youtu\.be\/([^\?]*)/]
      youtube_id = $1
    else
      # Regex from # http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url/4811367#4811367
      youtube_url[/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/]
      youtube_id = $5
    end
    "<iframe title='YouTube video player' width='640' height='390' src='http://www.youtube.com/embed/#{ youtube_id }' frameborder='0'allowfullscreen></iframe>".html_safe
  end

  def link_youtube?(content)
    if content[/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/]
      youtube_embed(content)
    end
  end
end
