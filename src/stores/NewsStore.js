import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import '../../semantic/dist/semantic.min.css';

var CHANGE_EVENT = 'change';

var NewsStore = assign({}, EventEmitter.prototype, {

    // Actual collection of model data
    news: [],

    // Accessor method we'll use later
    getAll: function() {
        return this.news;
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

        case AppConstants.GET_NEWS:

            // We get to mutate data!
            NewsStore.news = payload.news;
			
			// Tell the world we changed!
            //NewsStore.trigger(CHANGE_EVENT);
			NewsStore.emitChange();
			
            break;

    }

    return true; // Needed for Flux promise resolution

}); 

module.exports = NewsStore;