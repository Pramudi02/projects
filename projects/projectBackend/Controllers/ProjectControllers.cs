using Microsoft.AspNetCore.Mvc;
using projectBackend.Models;
using projectBackend.Services;

namespace projectBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly ProjectService _service;

        public ProjectsController(ProjectService service)
        {
            _service = service;
        }

        [HttpGet]
            public async Task<IActionResult> GetAll()
            {
                var projects = await _service.GetAllAsync();
                if (projects.Count == 0)
                {
                    return NoContent(); // Return 204 if no projects are found
                }
                return Ok(projects); // Return 200 with the list of projects
            }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id) => Ok(await _service.GetByIdAsync(id));

        [HttpPost]
        public async Task<IActionResult> Create(Project project)
        {
            await _service.CreateAsync(project);
            return Ok(project);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Project project)
        {
            await _service.UpdateAsync(id, project);
            return Ok(project);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}
