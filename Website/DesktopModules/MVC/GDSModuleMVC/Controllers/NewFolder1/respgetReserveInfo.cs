﻿using System;
namespace Moslem.Modules.GDS.GDSModuleMVC.Controllers
{
	public class respgetReserveInfo
	{
		public bool status { get; set; }
		public int errorCode { get; set; }
		public string description { get; set; }
		public ResponsegetReserveInfo response { get; set; }
		public string datetime { get; set; }
	}
}
