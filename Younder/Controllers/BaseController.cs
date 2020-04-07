using System;
using System.Threading.Tasks;
using   Younder.Shared.Responses;
using Microsoft.AspNetCore.Mvc;
using Younder.Services.IServices;

namespace Younder.Controllers {

    [Produces ("application/json")]
    [Route ("api/[controller]/[action]")]
    [ApiController]
    public abstract class BaseController<S, TModel> : Controller
    where S : IServices<TModel> {
        protected readonly S service;

        public BaseController (S service) {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Create ([FromBody]TModel entity) {
            try {
                var result = await service.Add (entity);
                if (result) {

                    return Ok (entity);
                }

                return StatusCode (result.StatusCode, ErrorDto.Create (result.StatusCode, result.Error));
            } catch (Exception ex) {

                return StatusCode (500, ErrorDto.Create (500, "Internal server error"));
            }
        }

        [HttpGet]
        [Route ("{id}")]
        public virtual async Task<IActionResult> Get (int id) {

            try {

                var result = await service.GetById (id);
                if (result) {

                    return Ok (result.Value);
                }

                return StatusCode (result.StatusCode, ErrorDto.Create (result.StatusCode, result.Error));
            } catch (Exception ex) {

                return StatusCode (500, ErrorDto.Create (500, "Internal server error"));
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAll () {
            try {
                var result = await service.GetAll ();
                if (result) {
                    return Ok (result.Value);
                }

                return StatusCode (result.StatusCode, ErrorDto.Create (result.StatusCode, result.Error));
            } catch (Exception ex) {

                return StatusCode (500, ErrorDto.Create (500, "Internal server error"));
            }
        }

        [HttpDelete]
        [Route ("{id}")]
        public async Task<IActionResult> Delete (int id) {
            try {
                var result = await service.Delete (id);
                if (result) {
                    return Ok ();
                }

                return StatusCode (result.StatusCode, ErrorDto.Create (result.StatusCode, result.Error));
            } catch (Exception ex) {

                return StatusCode (500, ErrorDto.Create (500, "Internal server error"));
            }
        }
    }
}