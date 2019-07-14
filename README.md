# RoofStock

Please Open the the root folder in Visual Studio Code or Visual Studio 2017.

please change the connection string in appSettings.json file as per your system.
"ConnectionStrings": {
    "Default": "server=DESKTOP-4DM8JFT\\SQLEXPRESS(change it to your sql server); database=RoofStock; user id=sa; password=sushil"
  }
  
Please run the following commands on root folder in the terminal or package manager console window to run the application.
dotnet restore
cd .\ClientApp\
npm install
npm audit fix
dotnet ef database update
dotnet run

