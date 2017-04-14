import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

var NewsSourcesStore = assign({}, EventEmitter.prototype, {

    // Actual collection of model data
    sources: [{header:"jude testing",description:"description"}],

    // Accessor method we'll use later
    getAll: function() {
        return this.sources;
    },

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	
	/**
   * @param {function} callback
   */
	addChangeListener: function(callback) {
		this.on( CHANGE_EVENT, callback);
	},

  /**
   * @param {function} callback
   */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case AppConstants.GET_SOURCES:
         
            // We get to mutate data!
            
            
            NewsSourcesStore.sources = payload.newItem;;
			
			// Tell the world we changed!
            //NewsStore.trigger(CHANGE_EVENT);
			NewsSourcesStore.emitChange();
			
            break;

    }

    return true; // Needed for Flux promise resolution

}); 

module.exports = NewsSourcesStore;