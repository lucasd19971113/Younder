using System;

namespace Younder.Models
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public DateTime Birth { get; set; }
        public UserStatus Status { get; set; }
        public string PhoneNumber { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }

        // public static User UserGetDtoToUser(UserGetDto dto)
        // {
        //     return new User
        //     {
        //         Id = dto.Id,

        //     };
        // }
    }

    public class UserGetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public DateTime Birth { get; set; }
        public UserStatus Status { get; set; }
        public string Email { get; set; }
    }

    public enum UserStatus
    {
        Ativo=1,
        Inativo=0
    }

    public enum UserGender
    {
        Masculino=1,
        Feminino=0
    }
}

/*

id: number,
    nome: string
    sobrenome: string,
    dataNascimento: Date,
    criado: Date,
    modificado: Date,
    status: UserStatus,
    telefone: string,
    cpf: string,
    email: string,
    sexo: UserGender,
    paisOrigem: string
*/