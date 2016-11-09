{"dynamo": {
		"type": "object", 
		"properties": {
			"endpoint": {"type": "string"},
			"region": {"type": "string"},
			"profile": {"type": "string"},
			"settings": {
				"type": "object", 
				"properties": {
					"size": {"type": "number", "maximum": 25, "minimum": 1},
					"startingDelay": {"type": "number", "multipleOf": 100 },
					"increment": {"type": "number", "multipleOf": 100},
					"tables": {
						"type" : "object",
						"properties": {
							"diff": {"type": "string", "pattern": "^_\\w{3,5}$"},
							"raw": {"type": "string", "pattern": "^_\\w{3,5}$"},
							"store": {"type": "string", "pattern": "^_\\w{3,5}$"}
						}
					}
				}
			}
		}
	}
}