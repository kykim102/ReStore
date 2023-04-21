// using API.Data;
// using API.Entities;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers
// {
//   [ApiController]
//   [Route("api/[controller]")]
//   public class ShopsController : ControllerBase
//   {
//     private readonly StoreContext _context;
//     public ShopsController(StoreContext context)
//     {
//       _context = context;
//     }

//     [HttpGet]
//     public async Task<ActionResult<List<Shop>>> GetShops()
//     {
//         return await _context.Shops.ToListAsync();
//     }

//     [HttpGet("{id}")]
//     public async Task<ActionResult<Shop>> GetShop(int id)
//     {
//         return await _context.Shops.FindAsync(id);
//     }
//   }
// }