using System;

namespace Younder.Models
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public DateTime Criado { get; set; }
        public DateTime Modificado { get; set; }
    }
}