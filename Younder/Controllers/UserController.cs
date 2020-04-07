using System;
using System.Threading.Tasks;
using   Younder.Shared.Responses;
using Microsoft.AspNetCore.Mvc;
using Younder.Models;
using Younder.Services.IServices;

namespace Younder.Controllers
{
    public class UserController : BaseController<IUserService, User>
    {
        public UserController(IUserService service) : base(service)
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers () {
            try {
                var result = await service.GetAllUsers ();
                if (result) {
                    return Ok (result.Value);
                }

                return StatusCode (result.StatusCode, ErrorDto.Create (result.StatusCode, result.Error));
            } catch (Exception ex) {

                return StatusCode (500, ErrorDto.Create (500, "Internal server error"));
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] User user)
        {
            try
            {
                user.Modificado = DateTime.Now;
                var result = await service.Update(user);

                if(result)
                {
                    return Ok(result);
                }

                return StatusCode (result.StatusCode, ErrorDto.Create (result.StatusCode, result.Error));
            }
            catch(Exception ex)
            {
                return StatusCode (500, ErrorDto.Create (500, "Internal server error"));
            }
        }
    }
}