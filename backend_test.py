import requests
import sys
from datetime import datetime
import json

class NetDansLHeureAPITester:
    def __init__(self, base_url="https://homecare-preview.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2, default=str)}")
                except:
                    print(f"Response text: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:500]}...")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )
        return success

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "nom": "Test User",
            "email": "test@example.com",
            "telephone": "0660083818",
            "sujet": "Test Subject",
            "message": "Test message for contact form"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        return success, response

    def test_get_contacts(self):
        """Test getting contacts"""
        success, response = self.run_test(
            "Get Contacts",
            "GET",
            "api/contact",
            200
        )
        return success

    def test_devis_submission(self):
        """Test devis form submission"""
        test_data = {
            "services": ["menage", "jardinage"],
            "frequence": "hebdo",
            "adresse": "123 Rue de Test",
            "code_postal": "25000",
            "ville": "Besançon",
            "nom": "Test Devis User",
            "email": "devis@example.com",
            "telephone": "0660083818",
            "commentaire": "Test comment for devis"
        }
        
        success, response = self.run_test(
            "Devis Form Submission",
            "POST",
            "api/devis",
            200,
            data=test_data
        )
        return success, response

    def test_get_devis(self):
        """Test getting devis"""
        success, response = self.run_test(
            "Get Devis",
            "GET",
            "api/devis",
            200
        )
        return success

def main():
    print("🚀 Starting Net Dans L'Heure API Tests")
    print("=" * 50)
    
    # Setup
    tester = NetDansLHeureAPITester()

    # Run tests
    print("\n📡 Testing API Root...")
    tester.test_api_root()

    print("\n📧 Testing Contact API...")
    contact_success, contact_response = tester.test_contact_submission()
    if contact_success:
        tester.test_get_contacts()

    print("\n📋 Testing Devis API...")
    devis_success, devis_response = tester.test_devis_submission()
    if devis_success:
        tester.test_get_devis()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Tests Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())