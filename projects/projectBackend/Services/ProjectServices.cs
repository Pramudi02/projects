using MongoDB.Driver;
using projectBackend.Models;

namespace projectBackend.Services
{
    public class ProjectService
    {
        private readonly IMongoCollection<Project> _projects;

        public ProjectService(IConfiguration config)
        {
            var client = new MongoClient(config["DatabaseSettings:ConnectionString"]);
            var database = client.GetDatabase(config["DatabaseSettings:DatabaseName"]);
            _projects = database.GetCollection<Project>(config["DatabaseSettings:CollectionName"]);
        }

        // Get all projects, but if no projects exist, add some predefined ones
        public async Task<List<Project>> GetAllAsync()
        {
            var projects = await _projects.Find(_ => true).ToListAsync();
            
            if (projects.Count == 0)
            {
                // Insert default projects if none exist
                var defaultProjects = new List<Project>
                {
                    new Project { Id = "1", Title = "Angular Project", Description = "A project using Angular", Technology = "Angular" },
                    new Project { Id = "2", Title = "React Project", Description = "A project using React", Technology = "React" },
                    new Project { Id = "3", Title = "ASP.NET Core Project", Description = "A project using ASP.NET Core", Technology = "ASP.NET Core" }
                };
                await _projects.InsertManyAsync(defaultProjects); // Insert default projects into the MongoDB collection
                projects = defaultProjects; // Assign the default projects to the result
            }

            return projects;
        }

        public async Task<Project> GetByIdAsync(string id) => 
            await _projects.Find(p => p.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Project project) => 
            await _projects.InsertOneAsync(project);

        public async Task UpdateAsync(string id, Project project) => 
            await _projects.ReplaceOneAsync(p => p.Id == id, project);

        public async Task DeleteAsync(string id) => 
            await _projects.DeleteOneAsync(p => p.Id == id);
    }
}
