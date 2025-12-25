/**
 * Project Configuration
 *
 * Centralized project data and image mappings
 *
 * Dependencies: core/data-loader.js
 * Exports: PROJECTS array, PROJECT_FEATURED_IMAGES object, helper functions
 */

// ==========================================
// Centralized Project Configuration
// ==========================================
// All project data now loaded from data/projects.json
// This file maintains image mappings and helper functions only

// Mapping of project IDs to their featured carousel images
const PROJECT_FEATURED_IMAGES = {
    'mindlyfe-platform': ['mindlyfe-1', 'mindlyfe-2'],
    'movie-box-app': ['moviebox-1', 'moviebox-2'],
    'geta-waterbill-app': ['waterbill-1', 'waterbill-2'],
    'quikie-js-project': ['quikie-1']
};

// ==========================================
// Helper Functions
// ==========================================

// Helper function to get project by ID or URL
// Uses dataLoader as single source of truth
function getProject(identifier) {
    return dataLoader.getProject(identifier);
}

// Helper function to get previous/next projects
// Uses dataLoader as single source of truth
function getAdjacentProjects(identifier) {
    return dataLoader.getAdjacentProjects(identifier);
}
