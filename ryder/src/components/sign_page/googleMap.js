import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';

export class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
      }
     
      handleChange = address => {
        this.setState({ address });
      };

      handleSelect = address => {
        // Handle the selected address here
        console.log("Selected address: ", address);
      };

      render() {
        return (
          <div>
            <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect} // You were missing this function
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          </div>
        )
      }
}

export default GoogleMap
