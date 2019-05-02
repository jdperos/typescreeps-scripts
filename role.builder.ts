var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) 
    {

	    if(creep.memory.building && creep.carry.energy == 0)
	    {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) 
	    {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) 
	    {
            var target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(target) 
            {
                if(creep.build(target) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else 
	    {
	        // var sources = creep.room.find(FIND_SOURCES);
	        var source = Game.spawns["Spawn1"].pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;