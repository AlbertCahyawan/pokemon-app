import React from 'react';
import { render, screen } from "./test-utils";
import PokemonCard from '../components/pokemonCard';


describe("PokemonCard", () => {
    it("should render pokemon", () => {
      render(<PokemonCard />);
  
      const defaultContent = screen.getByText(
        /Bulbasaur/i
      );
  
      // we can only use toBeInTheDocument because it was imported
      // in the jest.setup.js and configured in jest.config.js
      expect(defaultContent).toBeInTheDocument();
    });
  });