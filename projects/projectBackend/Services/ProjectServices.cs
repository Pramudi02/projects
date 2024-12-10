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

        public async Task<List<Project>> GetAllAsync() => await _projects.Find(_ => true).ToListAsync();
        public async Task<Project> GetByIdAsync(string id) => await _projects.Find(p => p.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Project project) => await _projects.InsertOneAsync(project);
        public async Task UpdateAsync(string id, Project project) => await _projects.ReplaceOneAsync(p => p.Id == id, project);
        public async Task DeleteAsync(string id) => await _projects.DeleteOneAsync(p => p.Id == id);
    }
}