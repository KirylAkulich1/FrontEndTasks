using System.Text.Json;

namespace ChatApplication.Messages
{
    public static class MessageExtentions
    {
        public static string ToJson(this Message self)
        {
            self.ContentHash = self.Content.MD5Hash();
            return JsonSerializer.Serialize<Message>(self);
        }
    }
}