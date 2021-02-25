using System;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using ChatApplication.ConnectivityService;

namespace ChatApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            ConfigureChat("127.0.0.1", 4444, 5555);
            Container.ChatIO.Write(ChatConstants.GreetingMessage);
            Container.ChatIO.GetNextMessage();
        }

        private static  void ConfigureChat(string hostname,int remotePort,int localPort)
        {
            Container.ConfigureServices(hostname,remotePort,localPort);
            Container.ConfigureClient();
            Container.ConfigureStorage(hostname,remotePort);
            
        }
    }
}
