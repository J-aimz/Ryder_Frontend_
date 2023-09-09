import styles from "./RequestRiderForm.module.css";

function RequestRiderForm() {
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    dropOffPhoneNumber: "",
    Offer: 0,
  });

  function handleFormDataChange(e) {}
  function handleFormsubmition() {
    console.log(formData, "Form submited");
  }

  return (
    <div>
      <div className={styles.header}>
        <div>
          <img src="" alt="" />
          <span>Back</span>
        </div>
        <span>Request a Rider</span>
      </div>
      <div>
        <label htmlFor="pickUpLocation">
          <span>Pick Up Location</span>
          <input
            type="text"
            id="pickUpLocation"
            name="pickUpLocation"
            value={formData.pickUpLocation}
            onChange={(e) => handleFormDataChange(e)}
          />
        </label>

        <label htmlFor="dropOffLocation">
          <span>Drop off Location</span>
          <input
            type="text"
            id="dropOffLocation"
            name="dropOffLocation"
            value={formData.dropOffLocation}
            onChange={(e) => handleFormDataChange(e)}
          />
        </label>

        <label htmlFor="dropOffPhoneNumber">
          <span>Drop off Phone Number</span>
          <input
            type="text"
            id="dropOffPhoneNumber"
            name="dropOffPhoneNumber"
            value={formData.dropOffPhoneNumber}
            onChange={(e) => handleFormDataChange(e)}
          />
        </label>

        <label htmlFor="Offer">
          <span>Offer (NGN)</span>
          <input
            type="text"
            id="Offer"
            name="Offer"
            value={formData.Offer}
            onChange={(e) => handleFormDataChange(e)}
          />
        </label>

        <button type="button" onClick={handleFormsubmition}>
          Order Ride
        </button>
      </div>
    </div>
  );
}

export default RequestRiderForm;
