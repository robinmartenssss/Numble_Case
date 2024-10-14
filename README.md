# Numble_Case

This project is a simple web application built using React (frontend), .NET Core (backend), and SQL Server (database).

# Used Technologies

React (Frontend)
.NET Core (Backend)
SQL Server (Database, running on Docker)
Docker (for local SQL Server)
Azure SQL Server (for remote access to the database)

# Before setting up the project, ensure that you have the following installed on your machine:

Node.js (for React frontend)
.NET Core SDK
Docker (for running SQL Server locally)
Azure SQL Server account (optional, for remote database access)

# Set up the SQL Server with Docker

docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Numble_Opdracht08' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

# Install Backend Dependencies

cd backend
dotnet restore

# Run the Backend (API)

dotnet run

# Install Frontend Dependencies

cd frontend
npm install

# Run the Frontend

npm run start

# Test Backend

curl -X GET "http://localhost:5244/api/customer"
