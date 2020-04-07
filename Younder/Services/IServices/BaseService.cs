using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using   Younder.Shared;
using Microsoft.EntityFrameworkCore;
using Younder.Context;
using Younder.Repository;
using Younder.Repository.IRepositories;
using Younder.Services.IServices;

namespace Younder.Services
{
    public class BaseService<T, Repository> : IServices<T> where T : class where Repository : IRepository<T>
    {
        protected readonly Repository _repo;

        public BaseService(Repository repo)
        {
            _repo = repo;
        }

        public virtual async Task<Result> Add(T entity)
        {
            await _repo.Add(entity);
            await _repo.Save();
            return Result.Ok();
        }

        public async Task<Result> Delete(int id)
        {
            var entity = await _repo.GetById(id);
            if (entity != null)
            {
                try
                {
                    _repo.Delete(entity);
                    await _repo.Save();
                    return Result.Ok();
                }
                catch (DbUpdateException)
                {
                    return Result.Fail("Não é possível deletar essa entidade pois outra depende da mesma", ResultCode.BadRequest);
                }
            }
             
            return Result.Fail("Nenhum registro com o ID encontrado", ResultCode.NotFound);
        }

        public async Task<Result<List<T>>> GetAll()
        {
            var entities = await _repo.GetAll();

            if(entities.AsEnumerable().Any())
            {
                return Result.Ok(entities.ToList());
            }

            return Result.Fail<List<T>>("No register was found", ResultCode.NoContent);
        }

        public async Task<Result<T>> GetById(int id)
        {
            var entity = await _repo.GetById(id);
            if (entity != null)
            {
                return Result.Ok(entity);
            }

            return Result.Fail<T>("Nenhum registro com o ID encontrado", ResultCode.NotFound);
        }

        public async Task<Result> Update(T entity)
        {
            _repo.Update(entity);
            await _repo.Save();

            return Result.Ok();
        }
    }
}