// Test script to verify WineCore imports work correctly
try {
  console.log('Testing WineCore imports...');
  
  // Test importing from models.ts
  const { WineCore, WineCoreImpl } = require('./src/data/models.ts');
  console.log('✓ Successfully imported WineCore and WineCoreImpl from models.ts');
  
  // Test creating a WineCoreImpl instance
  const wine = new WineCoreImpl();
  console.log('✓ Successfully created WineCoreImpl instance');
  
  // Test importing from wines.ts
  const { getAllWinesForRetailer } = require('./src/data/wines.ts');
  console.log('✓ Successfully imported from wines.ts');
  
  console.log('\n✅ All imports work correctly!');
  
} catch (error) {
  console.error('❌ Import error:', error.message);
  console.error('Stack:', error.stack);
}