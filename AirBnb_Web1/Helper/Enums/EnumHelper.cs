using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.Enums
{
    public enum Genders
    {
        Male,
        Famale
    }

    public enum Roles
    {
        Admin,
        Host,
        Guest
    }

    public enum ApartmanType
    {
        FullApartman,
        Room
    }

    public enum ApartmanStatus
    {
        Active,
        NotActive
    }

    public enum ReservationStatus
    {
        Created,
        Rejected,
        Canceled,
        Accepted,
        Done
    }
}