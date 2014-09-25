//TechnologyCraft
//Version 1.0
//Mod Made By TheSkyMachine
//Do NOT distribute without my permission!
 
/*----------VARIABLES----------*/

/*----------ITEMS----------*/
ModPE.setItem(326,"gold_horse_armor",0,"refinedIron",64);
ModPE.langEdit("item.refinedIron.name","Refined Iron");

/*----------BLOCKS----------*/
Block.defineBlock(23,"Standard Machine","mob_spawner",42,false,0);

Block.defineBlock(25,"Charger",[["mob_spawner",0],["piston_top_normal",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0]],17,false,0);

function newLevel()
{
  clientMessage("TechnologyCraft: The Revolution");
}
