## Frontend challenge - Glam Up My Markup

Challenge Description:

Use CSS and JavaScript to make the below HTML markup beautiful, interactive, and useful. Your submission should be more fun and interactive than the HTML we provide, but also be usable and accessible. You should not directly edit the HTML provided, unless it is via JavaScript. We expect style and substance. You may add basic boilerplate, including meta tags etc. for presentation purposes.

```html
<section id="camp-activities-inquiry">
    <h1>Camp Activities Inquiry</h1>
    <form action="/submit-form" method="POST">
        <label for="activity-select">Which camp activities are you most looking forward to?</label>
        <select id="activity-select" name="activity">
            <option value="">--Please choose an option--</option>
            <option value="hiking">Hiking</option>
            <option value="canoeing">Canoeing</option>
            <option value="fishing">Fishing</option>
            <option value="crafts">Crafts</option>
            <option value="archery">Archery</option>
        </select>

        <label for="food-allergies">Food Allergies (if any)</label>
        <textarea id="food-allergies" name="food_allergies" rows="4" cols="50"></textarea>

        <label for="additional-info">Additional things the counselor should know</label>
        <textarea id="additional-info" name="additional_info" rows="4" cols="50"></textarea>

        <button type="submit">Submit</button>
    </form>
</section>
```