namespace projectBackend.Models
{
    public class Project
    {
        public required string Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Technology { get; set; }
    }
}