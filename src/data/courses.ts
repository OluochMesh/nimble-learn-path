export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  image: string;
  lessons: Lesson[];
  completed: boolean;
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.",
    instructor: "Sarah Johnson",
    duration: "8 hours",
    level: "Beginner",
    image: "/src/assets/course-web.jpg",
    completed: false,
    lessons: [
      { 
        id: "1-1", 
        title: "Introduction to HTML", 
        duration: "45 min", 
        completed: false,
        content: `# Introduction to HTML

Welcome to the world of web development! HTML (HyperText Markup Language) is the foundation of every website you visit.

## What is HTML?

HTML is a markup language that tells web browsers how to structure the content on a webpage. Think of it as the skeleton of a website - it provides the structure and framework.

## Basic HTML Structure

Every HTML document follows a basic structure:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
\`\`\`

## Common HTML Elements

- **Headings**: \`<h1>\` to \`<h6>\` for titles and subtitles
- **Paragraphs**: \`<p>\` for text content
- **Links**: \`<a href="url">Link text</a>\`
- **Images**: \`<img src="image.jpg" alt="description">\`
- **Lists**: \`<ul>\` for unordered lists, \`<ol>\` for ordered lists

## Practice Exercise

Try creating a simple HTML page with:
1. A heading with your name
2. A paragraph about yourself
3. A list of your hobbies

In the next lesson, we'll learn how to style these elements with CSS!`
      },
      { 
        id: "1-2", 
        title: "CSS Styling Basics", 
        duration: "60 min", 
        completed: false,
        content: `# CSS Styling Basics

Now that you know HTML, let's make your websites beautiful with CSS (Cascading Style Sheets)!

## What is CSS?

CSS is the language used to style and layout web pages. While HTML provides structure, CSS provides the visual design.

## Three Ways to Add CSS

1. **Inline CSS**: Directly in HTML elements
\`\`\`html
<p style="color: blue;">Blue text</p>
\`\`\`

2. **Internal CSS**: In the \`<head>\` section
\`\`\`html
<style>
  p { color: blue; }
</style>
\`\`\`

3. **External CSS**: Separate .css file (recommended)
\`\`\`css
/* styles.css */
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

## CSS Selectors

- **Element selector**: \`p { }\` - targets all \`<p>\` elements
- **Class selector**: \`.my-class { }\` - targets elements with class="my-class"
- **ID selector**: \`#my-id { }\` - targets element with id="my-id"

## Common CSS Properties

- \`color\`: text color
- \`background-color\`: background color
- \`font-size\`: text size
- \`margin\`: space outside element
- \`padding\`: space inside element
- \`border\`: element border

## Box Model

Understanding the CSS box model is crucial:
- Content → Padding → Border → Margin

## Practice

Style your HTML page from the previous lesson with:
- Different colors for headings and paragraphs
- Custom fonts
- Spacing between elements
- A background color`
      },
      { 
        id: "1-3", 
        title: "JavaScript Fundamentals", 
        duration: "90 min", 
        completed: false,
        content: `# JavaScript Fundamentals

JavaScript brings your websites to life by adding interactivity and dynamic behavior!

## What is JavaScript?

JavaScript is a programming language that runs in web browsers. It allows you to create interactive elements, respond to user actions, and modify page content dynamically.

## Adding JavaScript to HTML

\`\`\`html
<script>
  console.log("Hello, JavaScript!");
</script>
\`\`\`

Or link an external file:
\`\`\`html
<script src="script.js"></script>
\`\`\`

## Variables

Store data using variables:

\`\`\`javascript
let name = "John";
const age = 25;
var city = "New York"; // older way, prefer let/const
\`\`\`

## Data Types

- **String**: \`"Hello"\`
- **Number**: \`42\`, \`3.14\`
- **Boolean**: \`true\`, \`false\`
- **Array**: \`[1, 2, 3]\`
- **Object**: \`{ name: "John", age: 25 }\`

## Functions

Reusable blocks of code:

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World")); // "Hello, World!"
\`\`\`

## DOM Manipulation

Change your webpage dynamically:

\`\`\`javascript
// Select an element
const element = document.querySelector("#myElement");

// Change content
element.textContent = "New content!";

// Change style
element.style.color = "red";

// Add event listener
element.addEventListener("click", function() {
  alert("Element clicked!");
});
\`\`\`

## Practice Project

Create a button that changes the page background color when clicked!`
      },
      { 
        id: "1-4", 
        title: "Building Your First Website", 
        duration: "120 min", 
        completed: false,
        content: `# Building Your First Website

Time to put everything together and build a complete website!

## Project: Personal Portfolio Website

We'll create a simple portfolio with:
- A header with navigation
- An about section
- A projects showcase
- A contact form

## HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
    <h1>Welcome to My Portfolio</h1>
    <p>I'm a web developer passionate about creating amazing websites.</p>
  </section>

  <section id="projects">
    <h2>My Projects</h2>
    <div class="project-card">
      <h3>Project 1</h3>
      <p>Description of project</p>
    </div>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Name">
      <input type="email" placeholder="Email">
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <script src="script.js"></script>
</body>
</html>
\`\`\`

## Best Practices

1. Use semantic HTML elements
2. Keep your code organized
3. Comment your code
4. Test in different browsers
5. Validate your HTML

## Next Steps

In the next lesson, we'll make this responsive for mobile devices!`
      },
      { 
        id: "1-5", 
        title: "Responsive Design", 
        duration: "75 min", 
        completed: false,
        content: `# Responsive Design

Learn to make your websites look great on all devices - from phones to desktops!

## What is Responsive Design?

Responsive design ensures your website adapts to different screen sizes and devices. Over 50% of web traffic comes from mobile devices, so this is crucial!

## The Viewport Meta Tag

Always include this in your \`<head>\`:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Media Queries

CSS media queries allow you to apply different styles based on screen size:

\`\`\`css
/* Mobile first approach */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
    padding: 30px;
  }
}
\`\`\`

## Flexible Layouts

Use flexible units instead of fixed pixels:

- **Percentages**: \`width: 50%;\`
- **rem/em**: Relative to font size
- **vw/vh**: Viewport width/height

## Flexbox Layout

Modern way to create flexible layouts:

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  flex: 1 1 300px; /* grow | shrink | basis */
}
\`\`\`

## CSS Grid

Powerful 2D layout system:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

## Responsive Images

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

## Testing

Test your responsive design:
1. Browser dev tools (F12)
2. Resize browser window
3. Test on real devices
4. Use online testing tools

## Final Project

Make your portfolio website fully responsive across all devices!

Congratulations on completing this course! 🎉`
      },
    ],
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Master Python programming and data analysis with pandas, numpy, and visualization libraries.",
    instructor: "Michael Chen",
    duration: "12 hours",
    level: "Intermediate",
    image: "/src/assets/course-python.jpg",
    completed: false,
    lessons: [
      { 
        id: "2-1", 
        title: "Python Basics Review", 
        duration: "30 min", 
        completed: false,
        content: `# Python Basics Review

Let's refresh your Python fundamentals before diving into data science!

## Python Syntax Essentials

Python is known for its clean, readable syntax. Here are the key concepts:

### Variables and Data Types

\`\`\`python
# Numbers
age = 25
price = 19.99

# Strings
name = "Alice"
message = 'Hello, World!'

# Boolean
is_student = True

# Lists
fruits = ["apple", "banana", "orange"]

# Dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
\`\`\`

### Control Flow

**If statements:**
\`\`\`python
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")
\`\`\`

**Loops:**
\`\`\`python
# For loop
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

### Functions

\`\`\`python
def calculate_average(numbers):
    """Calculate the average of a list of numbers"""
    total = sum(numbers)
    return total / len(numbers)

# Usage
scores = [85, 92, 78, 90]
avg = calculate_average(scores)
print(f"Average: {avg}")
\`\`\`

### List Comprehensions

Powerful Python feature:
\`\`\`python
# Create a list of squares
squares = [x**2 for x in range(10)]

# Filter even numbers
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`

## Common Libraries for Data Science

- **NumPy**: Numerical computing
- **Pandas**: Data manipulation
- **Matplotlib**: Data visualization
- **Scikit-learn**: Machine learning

## Practice Exercise

Write a function that takes a list of temperatures in Celsius and converts them to Fahrenheit.

Ready to move on to NumPy!`
      },
      { 
        id: "2-2", 
        title: "NumPy Arrays", 
        duration: "60 min", 
        completed: false,
        content: `# NumPy Arrays

NumPy is the foundation of data science in Python. Master arrays and you'll master data science!

## What is NumPy?

NumPy (Numerical Python) provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on them.

## Installing NumPy

\`\`\`bash
pip install numpy
\`\`\`

## Creating Arrays

\`\`\`python
import numpy as np

# From a list
arr1 = np.array([1, 2, 3, 4, 5])

# Multi-dimensional array
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Special arrays
zeros = np.zeros((3, 4))      # 3x4 array of zeros
ones = np.ones((2, 3))         # 2x3 array of ones
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # 5 evenly spaced values

# Random arrays
random_arr = np.random.rand(3, 3)  # 3x3 random values
\`\`\`

## Array Operations

\`\`\`python
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Element-wise operations
print(a + b)      # [6, 8, 10, 12]
print(a * b)      # [5, 12, 21, 32]
print(a ** 2)     # [1, 4, 9, 16]

# Mathematical functions
print(np.sqrt(a))     # Square root
print(np.exp(a))      # Exponential
print(np.log(a))      # Natural log
\`\`\`

## Array Indexing and Slicing

\`\`\`python
arr = np.array([10, 20, 30, 40, 50])

print(arr[0])      # 10
print(arr[-1])     # 50
print(arr[1:4])    # [20, 30, 40]
print(arr[::2])    # [10, 30, 50]

# 2D array indexing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix[0, 1])    # 2
print(matrix[:, 1])    # [2, 5, 8] - entire column
print(matrix[1, :])    # [4, 5, 6] - entire row
\`\`\`

## Array Statistics

\`\`\`python
data = np.array([15, 23, 18, 30, 22])

print(np.mean(data))      # Average
print(np.median(data))    # Median
print(np.std(data))       # Standard deviation
print(np.min(data))       # Minimum
print(np.max(data))       # Maximum
print(np.sum(data))       # Sum
\`\`\`

## Broadcasting

NumPy can perform operations on arrays of different shapes:

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6]])
# Add 10 to all elements
result = arr + 10
\`\`\`

## Practice Project

Create a program that:
1. Generates a 5x5 matrix of random numbers
2. Calculates mean, std, min, max
3. Finds values greater than the mean

Next: Pandas DataFrames for structured data!`
      },
      { 
        id: "2-3", 
        title: "Pandas DataFrames", 
        duration: "90 min", 
        completed: false,
        content: `# Pandas DataFrames

Pandas is the go-to library for data manipulation and analysis in Python!

## What is Pandas?

Pandas provides two main data structures:
- **Series**: 1-dimensional labeled array
- **DataFrame**: 2-dimensional labeled data structure

## Installing Pandas

\`\`\`bash
pip install pandas
\`\`\`

## Creating DataFrames

\`\`\`python
import pandas as pd

# From a dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'City': ['New York', 'Paris', 'London', 'Tokyo'],
    'Salary': [70000, 80000, 75000, 85000]
}
df = pd.DataFrame(data)

# From a CSV file
df = pd.read_csv('data.csv')

# From an Excel file
df = pd.read_excel('data.xlsx')
\`\`\`

## Viewing Data

\`\`\`python
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.info())        # Summary information
print(df.describe())    # Statistical summary
print(df.shape)         # (rows, columns)
\`\`\`

## Selecting Data

\`\`\`python
# Select a column
ages = df['Age']

# Select multiple columns
subset = df[['Name', 'Age']]

# Select rows by condition
adults = df[df['Age'] >= 30]
high_earners = df[df['Salary'] > 75000]

# Multiple conditions
filtered = df[(df['Age'] >= 25) & (df['Salary'] > 70000)]
\`\`\`

## Adding and Modifying Data

\`\`\`python
# Add a new column
df['Department'] = ['IT', 'HR', 'IT', 'Finance']

# Calculate new column
df['Annual_Bonus'] = df['Salary'] * 0.1

# Modify existing values
df.loc[df['Age'] < 30, 'Status'] = 'Junior'
df.loc[df['Age'] >= 30, 'Status'] = 'Senior'
\`\`\`

## Grouping and Aggregation

\`\`\`python
# Group by a column
grouped = df.groupby('Department')['Salary'].mean()

# Multiple aggregations
agg_df = df.groupby('City').agg({
    'Salary': ['mean', 'min', 'max'],
    'Age': 'mean'
})
\`\`\`

## Handling Missing Data

\`\`\`python
# Check for missing values
print(df.isnull().sum())

# Drop rows with missing values
df_clean = df.dropna()

# Fill missing values
df['Age'].fillna(df['Age'].mean(), inplace=True)
\`\`\`

## Sorting Data

\`\`\`python
# Sort by one column
df_sorted = df.sort_values('Age')

# Sort by multiple columns
df_sorted = df.sort_values(['City', 'Salary'], ascending=[True, False])
\`\`\`

## Merging DataFrames

\`\`\`python
df1 = pd.DataFrame({'ID': [1, 2, 3], 'Name': ['A', 'B', 'C']})
df2 = pd.DataFrame({'ID': [1, 2, 4], 'Score': [90, 85, 88]})

# Merge on ID column
merged = pd.merge(df1, df2, on='ID', how='inner')
\`\`\`

## Practice Exercise

Load a dataset and:
1. Find the average value of a numeric column
2. Filter rows based on conditions
3. Group data and calculate statistics
4. Handle any missing values

Next: Visualizing your data!`
      },
      { 
        id: "2-4", 
        title: "Data Visualization", 
        duration: "75 min", 
        completed: false,
        content: `# Data Visualization

A picture is worth a thousand data points! Learn to create compelling visualizations.

## Why Visualize Data?

- Understand patterns and trends
- Communicate insights effectively
- Identify outliers and anomalies
- Make data-driven decisions

## Matplotlib Basics

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

## Common Plot Types

### Bar Chart
\`\`\`python
categories = ['A', 'B', 'C', 'D']
values = [25, 40, 30, 55]

plt.bar(categories, values, color='skyblue')
plt.title('Bar Chart Example')
plt.show()
\`\`\`

### Histogram
\`\`\`python
data = np.random.randn(1000)

plt.hist(data, bins=30, edgecolor='black', alpha=0.7)
plt.title('Distribution of Data')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.show()
\`\`\`

### Scatter Plot
\`\`\`python
x = np.random.rand(50)
y = np.random.rand(50)
colors = np.random.rand(50)
sizes = 1000 * np.random.rand(50)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.5, cmap='viridis')
plt.colorbar()
plt.title('Scatter Plot')
plt.show()
\`\`\`

### Pie Chart
\`\`\`python
sizes = [30, 25, 20, 15, 10]
labels = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E']
colors = ['gold', 'lightcoral', 'lightskyblue', 'lightgreen', 'pink']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)
plt.title('Pie Chart')
plt.axis('equal')
plt.show()
\`\`\`

## Seaborn for Statistical Plots

\`\`\`python
import seaborn as sns

# Set style
sns.set_style('whitegrid')

# Box plot
data = pd.DataFrame({
    'Category': ['A']*50 + ['B']*50 + ['C']*50,
    'Values': np.random.randn(150)
})

sns.boxplot(x='Category', y='Values', data=data)
plt.title('Box Plot')
plt.show()

# Heatmap (correlation matrix)
corr_matrix = df.corr()
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Heatmap')
plt.show()
\`\`\`

## Pandas Plotting

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    'Date': pd.date_range('2024-01-01', periods=100),
    'Value': np.random.randn(100).cumsum()
})

df.set_index('Date').plot(figsize=(12, 6))
plt.title('Time Series Plot')
plt.show()
\`\`\`

## Best Practices

1. **Choose the right chart type** for your data
2. **Label everything**: axes, title, legend
3. **Use appropriate colors** (consider colorblind-friendly palettes)
4. **Keep it simple**: avoid chart junk
5. **Tell a story** with your visualization

## Practice Project

Create a dashboard with:
1. A line chart showing trends over time
2. A bar chart comparing categories
3. A histogram of distributions
4. A correlation heatmap

Next lesson: Apply everything to real-world data!`
      },
      { 
        id: "2-5", 
        title: "Real-world Data Analysis", 
        duration: "120 min", 
        completed: false,
        content: `# Real-world Data Analysis

Put all your skills together in a complete data analysis project!

## The Data Analysis Process

1. **Define the question** - What are you trying to learn?
2. **Collect data** - Gather relevant datasets
3. **Clean data** - Handle missing values, duplicates, errors
4. **Explore data** - Use descriptive statistics and visualization
5. **Analyze** - Apply statistical methods
6. **Communicate** - Present findings clearly

## Project: Sales Data Analysis

Let's analyze a fictional company's sales data.

### Step 1: Load and Inspect Data

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
sales_df = pd.read_csv('sales_data.csv')

# Initial exploration
print(sales_df.head())
print(sales_df.info())
print(sales_df.describe())
\`\`\`

### Step 2: Data Cleaning

\`\`\`python
# Check for missing values
print(sales_df.isnull().sum())

# Remove duplicates
sales_df = sales_df.drop_duplicates()

# Handle missing values
sales_df['Revenue'].fillna(sales_df['Revenue'].median(), inplace=True)

# Convert data types
sales_df['Date'] = pd.to_datetime(sales_df['Date'])

# Remove outliers (using IQR method)
Q1 = sales_df['Revenue'].quantile(0.25)
Q3 = sales_df['Revenue'].quantile(0.75)
IQR = Q3 - Q1
sales_df = sales_df[(sales_df['Revenue'] >= Q1 - 1.5*IQR) & 
                     (sales_df['Revenue'] <= Q3 + 1.5*IQR)]
\`\`\`

### Step 3: Feature Engineering

\`\`\`python
# Extract date components
sales_df['Year'] = sales_df['Date'].dt.year
sales_df['Month'] = sales_df['Date'].dt.month
sales_df['Quarter'] = sales_df['Date'].dt.quarter
sales_df['DayOfWeek'] = sales_df['Date'].dt.day_name()

# Create calculated fields
sales_df['Profit_Margin'] = (sales_df['Revenue'] - sales_df['Cost']) / sales_df['Revenue']
\`\`\`

### Step 4: Exploratory Data Analysis

\`\`\`python
# Summary statistics by category
category_stats = sales_df.groupby('Product_Category').agg({
    'Revenue': ['sum', 'mean', 'count'],
    'Profit_Margin': 'mean'
}).round(2)
print(category_stats)

# Time series analysis
monthly_sales = sales_df.groupby('Month')['Revenue'].sum()
monthly_sales.plot(kind='line', figsize=(12, 6))
plt.title('Monthly Sales Trend')
plt.ylabel('Revenue')
plt.show()

# Distribution analysis
plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
sales_df['Revenue'].hist(bins=50, edgecolor='black')
plt.title('Revenue Distribution')

plt.subplot(1, 2, 2)
sns.boxplot(y=sales_df['Revenue'])
plt.title('Revenue Box Plot')
plt.tight_layout()
plt.show()

# Correlation analysis
numeric_cols = sales_df.select_dtypes(include=[np.number]).columns
corr_matrix = sales_df[numeric_cols].corr()

plt.figure(figsize=(10, 8))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Matrix')
plt.show()
\`\`\`

### Step 5: Key Insights

\`\`\`python
# Top performing products
top_products = sales_df.groupby('Product')['Revenue'].sum().nlargest(10)
print("Top 10 Products by Revenue:")
print(top_products)

# Sales by day of week
day_sales = sales_df.groupby('DayOfWeek')['Revenue'].mean()
day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
day_sales = day_sales.reindex(day_order)
day_sales.plot(kind='bar', color='skyblue', figsize=(10, 6))
plt.title('Average Revenue by Day of Week')
plt.ylabel('Average Revenue')
plt.xticks(rotation=45)
plt.show()

# Seasonal trends
quarterly_sales = sales_df.groupby('Quarter')['Revenue'].sum()
quarterly_sales.plot(kind='bar', color='green', figsize=(8, 6))
plt.title('Revenue by Quarter')
plt.ylabel('Total Revenue')
plt.show()
\`\`\`

### Step 6: Conclusions and Recommendations

Based on the analysis:

1. **Peak sales periods**: Identify best performing months/quarters
2. **Product performance**: Focus on high-revenue products
3. **Day patterns**: Optimize staffing for high-sales days
4. **Profit margins**: Address low-margin products

## Final Exercise

Complete your own analysis:
1. Choose a dataset (Kaggle, UCI ML Repository, or government data)
2. Clean and prepare the data
3. Create visualizations
4. Draw insights and recommendations
5. Create a presentation of findings

## Congratulations! 🎉

You've completed the Python for Data Science course! You now have the skills to:
- Manipulate data with Pandas
- Perform numerical operations with NumPy
- Create compelling visualizations
- Conduct real-world data analysis

Keep practicing and exploring more advanced topics!`
      },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Principles",
    description: "Create beautiful and user-friendly interfaces with modern design principles and tools.",
    instructor: "Emma Williams",
    duration: "10 hours",
    level: "Beginner",
    image: "/src/assets/course-design.jpg",
    completed: false,
    lessons: [
      { 
        id: "3-1", 
        title: "Design Thinking", 
        duration: "45 min", 
        completed: false,
        content: `# Design Thinking

Design Thinking is a human-centered approach to innovation that puts the user at the heart of the design process.

## What is Design Thinking?

Design Thinking is a methodology that provides a solution-based approach to solving problems. It's extremely useful when tackling complex problems that are ill-defined or unknown.

## The Five Stages of Design Thinking

### 1. Empathize
Understand your users' needs, experiences, and motivations.

**Methods:**
- User interviews
- Observation
- Empathy mapping
- User journey mapping

**Key Questions:**
- Who are my users?
- What are their pain points?
- What motivates them?

### 2. Define
Clearly articulate the problem you want to solve.

**Activities:**
- Synthesize research findings
- Create user personas
- Define problem statements
- Identify key insights

**Example Problem Statement:**
"Busy professionals need a way to quickly find healthy meal options because they don't have time to cook during the workweek."

### 3. Ideate
Generate a wide range of creative solutions.

**Techniques:**
- Brainstorming
- Mind mapping
- SCAMPER method
- Crazy 8s
- How Might We questions

**Rules for Ideation:**
- Defer judgment
- Encourage wild ideas
- Build on others' ideas
- Stay focused on topic
- Go for quantity

### 4. Prototype
Create simple, scaled-down versions of your solution.

**Types of Prototypes:**
- Paper sketches
- Wireframes
- Mockups
- Interactive prototypes
- Physical models

**Remember:** Start with low-fidelity prototypes and iterate!

### 5. Test
Test your prototypes with real users and gather feedback.

**Testing Methods:**
- Usability testing
- A/B testing
- Focus groups
- Surveys
- Analytics

**Key Insight:** Design Thinking is iterative. You'll often cycle back to previous stages based on what you learn.

## Benefits of Design Thinking

- Reduces risk and uncertainty
- Fosters innovation
- Improves user satisfaction
- Encourages collaboration
- Faster time to market

## Real-World Example

**Challenge:** Design an app for busy parents to track their children's activities.

1. **Empathize:** Interview parents, observe their daily routines
2. **Define:** "Parents need a simple way to coordinate family schedules"
3. **Ideate:** Calendar app, notification system, sharing features
4. **Prototype:** Create simple wireframes
5. **Test:** Test with parent focus groups, iterate based on feedback

## Practice Exercise

Choose a everyday problem (like finding parking, grocery shopping, or morning routines) and apply the Design Thinking process to it.

Next lesson: We'll dive into Color Theory!`
      },
      { 
        id: "3-2", 
        title: "Color Theory", 
        duration: "60 min", 
        completed: false,
        content: `# Color Theory

Master the art and science of color to create visually stunning and effective designs!

## Understanding Color

Color is one of the most powerful tools in a designer's toolkit. It can evoke emotions, convey messages, and influence user behavior.

## The Color Wheel

The color wheel is organized into:

### Primary Colors
- **Red**
- **Blue**
- **Yellow**

These colors cannot be created by mixing other colors.

### Secondary Colors
- **Orange** (Red + Yellow)
- **Green** (Blue + Yellow)
- **Purple** (Red + Blue)

### Tertiary Colors
Created by mixing primary and secondary colors (Red-Orange, Blue-Green, etc.)

## Color Properties

### Hue
The pure color itself (red, blue, green, etc.)

### Saturation
The intensity or purity of a color
- High saturation = vivid, bright
- Low saturation = dull, gray

### Value (Brightness)
How light or dark a color is
- Tint: color + white
- Shade: color + black
- Tone: color + gray

## Color Harmonies

### Complementary
Colors opposite on the color wheel (Red & Green, Blue & Orange)
- High contrast
- Vibrant and energetic
- Use one as dominant, other as accent

### Analogous
Colors next to each other on the wheel (Blue, Blue-Green, Green)
- Harmonious and pleasing
- Low contrast
- Great for backgrounds

### Triadic
Three colors evenly spaced on the wheel (Red, Yellow, Blue)
- Vibrant and balanced
- Use one dominant color

### Split-Complementary
One color plus two colors adjacent to its complement
- High contrast but less tension than complementary
- Good for beginners

### Monochromatic
Different shades, tints, and tones of a single hue
- Clean and elegant
- Easy to create
- Can lack visual interest if overused

## Color Psychology

Colors evoke specific emotions and associations:

- **Red:** Passion, energy, danger, urgency
- **Blue:** Trust, calm, professionalism, stability
- **Green:** Nature, growth, health, money
- **Yellow:** Happiness, optimism, caution
- **Purple:** Luxury, creativity, mystery
- **Orange:** Energy, enthusiasm, warmth
- **Black:** Elegance, power, sophistication
- **White:** Purity, simplicity, cleanliness

## Practical Color Tips

### The 60-30-10 Rule
- 60% dominant color (main background)
- 30% secondary color (content areas)
- 10% accent color (buttons, highlights)

### Accessibility
- Ensure sufficient contrast (WCAG AA: 4.5:1 for normal text)
- Don't rely on color alone to convey information
- Test designs in grayscale
- Use tools like WebAIM Contrast Checker

### Cultural Considerations
- Colors have different meanings in different cultures
- Research your target audience
- Be mindful of cultural associations

## Creating Color Palettes

**Tools:**
- Adobe Color
- Coolors.co
- Color Hunt
- Material Design Color Tool

**Steps:**
1. Start with a primary brand color
2. Choose 2-3 supporting colors
3. Add neutral colors (white, gray, black)
4. Test in actual designs
5. Refine based on results

## Common Mistakes to Avoid

- Using too many colors (stick to 3-5 main colors)
- Poor contrast ratios
- Ignoring color blindness (8% of men, 0.5% of women)
- Following trends blindly
- Not testing on different screens

## Practice Exercise

1. Choose a brand you admire
2. Analyze their color palette
3. Identify the color harmonies used
4. Explain why the colors work for that brand
5. Create an alternative color palette for the same brand

Understanding color theory is fundamental to great design. Next, we'll explore Typography!`
      },
      { 
        id: "3-3", 
        title: "Typography Basics", 
        duration: "50 min", 
        completed: false,
        content: `# Typography Basics

Typography can make or break your design. Learn to use type effectively and beautifully!

## What is Typography?

Typography is the art and technique of arranging type to make written language legible, readable, and appealing.

## Type Classifications

### Serif
Fonts with small decorative strokes (serifs) at the ends of letters.
- Examples: Times New Roman, Georgia, Garamond
- Feel: Traditional, authoritative, classic
- Best for: Print, long-form reading, formal content

### Sans-Serif
Fonts without serifs - clean and modern.
- Examples: Arial, Helvetica, Roboto
- Feel: Modern, clean, minimalist
- Best for: Digital screens, headlines, UI

### Script
Fonts that mimic handwriting or calligraphy.
- Examples: Pacifico, Brush Script, Lobster
- Feel: Elegant, personal, creative
- Best for: Logos, invitations, accents (use sparingly)

### Monospace
Every character takes up the same width.
- Examples: Courier, Monaco, Consolas
- Feel: Technical, retro
- Best for: Code, data, typewriter aesthetic

### Display
Decorative fonts for headlines and attention.
- Highly stylized and unique
- Feel: Varies greatly
- Best for: Headlines, posters (never body text)

## Typography Anatomy

Key terms:
- **Baseline:** The line letters sit on
- **X-height:** Height of lowercase letters
- **Ascender:** Part of letter extending above x-height (like 'h', 'b')
- **Descender:** Part extending below baseline (like 'g', 'y')
- **Counter:** Enclosed white space (inside 'o', 'a')
- **Kerning:** Space between individual letters
- **Leading:** Space between lines of text
- **Tracking:** Overall spacing of letters in a word

## Typography Hierarchy

Create visual hierarchy with:

### Size
- H1: 32-48px
- H2: 24-32px
- H3: 20-24px
- Body: 16-18px
- Small text: 12-14px

### Weight
- Thin (100)
- Light (300)
- Regular (400)
- Medium (500)
- Bold (700)
- Black (900)

### Color
- Primary text: Full opacity
- Secondary text: 70-80% opacity
- Disabled text: 40-50% opacity

## Font Pairing

### The Rules

1. **Contrast is key**
   - Pair serif with sans-serif
   - Different weights and sizes
   - But maintain harmony

2. **Limit to 2-3 fonts**
   - One for headlines
   - One for body text
   - Optional: One for accents

3. **Same font family can work**
   - Use different weights
   - Vary sizes significantly

### Classic Pairings

- **Playfair Display (Serif) + Montserrat (Sans-serif)**
- **Lora (Serif) + Open Sans (Sans-serif)**
- **Raleway (Sans-serif) + Merriweather (Serif)**
- **Bebas Neue (Display) + Roboto (Sans-serif)**

## Readability Guidelines

### Line Length
- Optimal: 50-75 characters per line
- Too long = reader loses place
- Too short = choppy, tiring

### Line Height (Leading)
- Body text: 1.4-1.6 × font size
- Headlines: 1.1-1.3 × font size
- More space for longer lines

### Alignment
- **Left-aligned:** Most readable (Western languages)
- **Center-aligned:** Short text, headlines, poetry
- **Right-aligned:** Rarely, decorative purposes
- **Justified:** Can create awkward spacing

### Contrast
- Text on background needs sufficient contrast
- WCAG AA: 4.5:1 for normal text
- WCAG AAA: 7:1 for enhanced accessibility

## Responsive Typography

Use relative units:
- **rem:** Relative to root font size
- **em:** Relative to parent font size
- **vw:** Percentage of viewport width

Example:
\`\`\`css
body {
  font-size: 16px; /* Base size */
}

h1 {
  font-size: 2.5rem; /* 40px */
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* 32px */
  }
}
\`\`\`

## Common Mistakes

- Too many fonts (stick to 2-3)
- Poor contrast
- Lines too long or too short
- Insufficient line spacing
- All caps for long text (hard to read)
- Decorative fonts for body text
- Ignoring hierarchy

## Typography Resources

**Font Libraries:**
- Google Fonts (free)
- Adobe Fonts
- Font Squirrel (free)
- Type Foundries (premium)

**Tools:**
- FontPair.co (font pairing inspiration)
- Type Scale (size calculator)
- Font Awesome (icons)

## Practice Exercise

1. Find a website with poor typography
2. Identify what's wrong (hierarchy, pairing, spacing, etc.)
3. Redesign it with better typography
4. Create a style guide documenting your choices

Great typography is invisible - it lets the content shine while making reading effortless!`
      },
      { 
        id: "3-4", 
        title: "User Research Methods", 
        duration: "90 min", 
        completed: false,
        content: `# User Research Methods

Learn to understand your users deeply through effective research techniques!

## Why User Research?

- Design based on data, not assumptions
- Reduce risk of building the wrong thing
- Identify real user needs and pain points
- Validate design decisions
- Improve user satisfaction

**Remember:** You are not your user!

## Types of Research

### Qualitative Research
Explores the "why" behind behaviors
- Deep insights
- Smaller sample sizes
- Subjective data

### Quantitative Research
Measures the "what" and "how much"
- Statistical validity
- Larger sample sizes
- Objective data

**Best Practice:** Use both!

## Research Methods

### 1. User Interviews

**What:** One-on-one conversations with users

**When to use:**
- Early discovery phase
- Understanding motivations
- Exploring complex topics

**Best Practices:**
- Prepare open-ended questions
- Ask "why" five times
- Listen more than talk
- Record with permission
- 30-60 minutes per interview
- 5-8 participants for qualitative insights

**Sample Questions:**
- "Tell me about the last time you..."
- "What frustrates you most about..."
- "How do you currently..."
- "What would make this better?"

### 2. Surveys & Questionnaires

**What:** Structured questions to collect data at scale

**When to use:**
- Validate assumptions
- Prioritize features
- Measure satisfaction
- Large sample sizes needed

**Types of Questions:**
- Multiple choice
- Rating scales (1-5, 1-10)
- Likert scales (Strongly Disagree to Strongly Agree)
- Open-ended (use sparingly)

**Best Practices:**
- Keep it short (5-10 minutes max)
- One question per item
- Avoid leading questions
- Test before sending
- Offer incentives
- Clear introduction and purpose

### 3. Usability Testing

**What:** Watch users interact with your design

**When to use:**
- Testing prototypes
- Identifying usability issues
- Before launch
- Continuous improvement

**Process:**
1. Create test tasks
2. Recruit participants
3. Observe users completing tasks
4. Ask them to think aloud
5. Take notes on issues
6. Ask follow-up questions

**Example Task:**
"Imagine you need to change your password. Show me how you would do that."

**Key Metrics:**
- Success rate
- Time on task
- Error rate
- User satisfaction

### 4. Card Sorting

**What:** Users organize content into categories

**When to use:**
- Information architecture
- Menu structure
- Navigation design

**Types:**
- **Open card sorting:** Users create their own categories
- **Closed card sorting:** Users sort into predefined categories

**Process:**
1. Write content items on cards
2. Ask users to group related items
3. Have them name the groups
4. Analyze patterns across users

### 5. A/B Testing

**What:** Compare two versions to see which performs better

**When to use:**
- Optimizing conversion
- Testing design variations
- Data-driven decisions

**Elements to test:**
- Headlines
- Call-to-action buttons
- Colors
- Layout
- Content

**Requirements:**
- Sufficient traffic
- Statistical significance
- Test one variable at a time

### 6. Analytics & Heatmaps

**What:** Track user behavior on your site/app

**Tools:**
- Google Analytics
- Hotjar
- Mixpanel
- Amplitude

**Metrics:**
- Page views
- Bounce rate
- Time on site
- Click patterns
- Conversion funnels

**Heatmaps show:**
- Where users click
- How far they scroll
- Mouse movement patterns

### 7. Diary Studies

**What:** Users record experiences over time

**When to use:**
- Understanding context
- Long-term behavior patterns
- Moments of frustration/delight

**Duration:** 1-4 weeks typically

**Methods:**
- Photo/video diaries
- Written logs
- Voice recordings
- App-based tracking

### 8. Field Studies & Contextual Inquiry

**What:** Observe users in their natural environment

**When to use:**
- Understanding workflow
- Identifying context
- B2B products
- Physical products

**Benefits:**
- See actual behavior (not reported)
- Discover unexpected insights
- Understand environment constraints

## Creating User Personas

Synthesize research into representative user archetypes.

**Components:**
- Name and photo
- Demographics
- Goals and motivations
- Frustrations and pain points
- Behaviors and preferences
- Technology comfort level

**Example:**

**Sarah, The Busy Professional**
- Age: 32
- Occupation: Marketing Manager
- Goals: Save time, stay organized
- Frustrations: Too many tools, information overload
- Tech-savvy, mobile-first user

## Research Planning

### Define Objectives
- What do you need to learn?
- What decisions will this inform?

### Choose Methods
- Select 2-3 complementary methods
- Consider time and budget

### Recruit Participants
- Define target users
- Use screener questions
- Offer appropriate incentives

### Timeline
- Allow 2-4 weeks for most studies
- Factor in recruitment time

### Analysis
- Look for patterns across users
- Create affinity maps
- Document insights with quotes and evidence

## Research Ethics

- Obtain informed consent
- Protect privacy and anonymity
- Be transparent about usage
- Compensate fairly
- Allow participants to withdraw anytime

## Common Mistakes

- Asking leading questions
- Talking more than listening
- Small sample sizes for quantitative
- Ignoring contradictory data
- Not following up on interesting comments
- Researching but not applying insights

## Practice Exercise

Plan a research study:
1. Choose a product or feature
2. Define research questions
3. Select appropriate methods
4. Write a research plan
5. Create discussion guide or survey questions
6. Outline analysis approach

Good research is the foundation of great design. Next: Prototyping Tools!`
      },
      { 
        id: "3-5", 
        title: "Prototyping Tools", 
        duration: "105 min", 
        completed: false,
        content: `# Prototyping Tools

Learn the essential tools to bring your designs to life!

## Why Prototype?

- Test ideas quickly and cheaply
- Communicate design vision
- Get stakeholder buy-in
- Identify issues before development
- Iterate based on feedback

**Mantra:** Fail fast, learn faster!

## Levels of Fidelity

### Low-Fidelity
- Paper sketches
- Wireframes
- Basic layouts
- Fast and cheap
- Focus on structure

### Mid-Fidelity
- More detailed wireframes
- Some interactivity
- Gray-scale or limited color
- Focus on functionality

### High-Fidelity
- Full visual design
- Rich interactions
- Realistic content
- Looks like final product
- Focus on polish

**Tip:** Start low, increase fidelity as you validate!

## Essential Design Tools

### Figma ⭐ (Recommended)

**Best for:** UI/UX design, collaboration, prototyping

**Key Features:**
- Browser-based (no installation)
- Real-time collaboration
- Component libraries
- Auto-layout
- Interactive prototypes
- Design systems
- Free for individuals

**Strengths:**
- Works on any OS
- Team collaboration
- Version history
- Huge community
- Plugins ecosystem

**Use for:**
- Website design
- Mobile apps
- Design systems
- Prototyping

**Getting Started:**
\`\`\`
1. Create free account at figma.com
2. Use 'F' key to create a frame
3. 'R' for rectangle
4. 'T' for text
5. Click prototype tab to add interactions
\`\`\`

### Adobe XD

**Best for:** Adobe ecosystem users

**Key Features:**
- Voice prototyping
- Auto-animate
- Repeat grid
- Components
- Adobe integration

**Strengths:**
- Integrates with Creative Cloud
- Good performance
- Powerful animations

**Limitations:**
- Desktop app only
- Smaller community than Figma

### Sketch

**Best for:** Mac users, icon design

**Key Features:**
- Vector editing
- Symbols (reusable components)
- Plugins
- Export options

**Limitations:**
- Mac only
- Requires purchase
- Collaboration less seamless

### Adobe Illustrator

**Best for:** Logo design, illustrations, icons

**Strengths:**
- Industry standard
- Powerful vector tools
- Precise control

**Use for:**
- Logo design
- Icons
- Illustrations
- Print design

### Adobe Photoshop

**Best for:** Photo editing, image manipulation

**Use for:**
- Photo editing
- Digital art
- Mockups
- Texture creation

**Not ideal for:** UI design (raster-based)

## Prototyping-Specific Tools

### InVision

**Features:**
- Click-through prototypes
- Comments and feedback
- User testing
- Design handoff

**Best for:** Presenting designs, collecting feedback

### Principle

**Best for:** Advanced animations (Mac)

**Use for:**
- Micro-interactions
- Complex animations
- Mobile app prototypes

### ProtoPie

**Best for:** Advanced, code-free interactions

**Features:**
- Sensors (tilt, sound)
- Conditional logic
- Variables
- IoT integration

### Framer

**Best for:** Production-ready code

**Features:**
- Real React components
- Code + design
- Advanced interactions
- Deploy live sites

**Learning curve:** Higher (some coding knowledge helpful)

## Design System Tools

### Storybook
- Component library
- Documentation
- For developers and designers

### Zeroheight
- Design system documentation
- Style guides
- Component specs

## Handoff Tools

### Zeplin
- Design specs for developers
- Style guides
- Asset export
- Comments

### Avocode
- Design to code
- Version control
- Multi-platform support

## Icon Libraries

- **Font Awesome:** Thousands of icons
- **Material Icons:** Google's icon library
- **Feather Icons:** Simple, clean icons
- **Ionicons:** Mobile-focused icons

## Stock Resources

**Images:**
- Unsplash
- Pexels
- Pixabay

**Illustrations:**
- unDraw
- Humaaans
- Blush

**Mockups:**
- Mockup World
- Placeit
- Smartmockups

## Workflow Example

### 1. Ideation Phase
**Tools:** Paper & pencil, Whimsical (wireframes)
- Sketch multiple ideas
- Focus on layout and flow
- Quick and dirty

### 2. Wireframing
**Tools:** Figma, Sketch, Balsamiq
- Create low-fi wireframes
- Establish information architecture
- Show to stakeholders

### 3. Visual Design
**Tools:** Figma, Adobe XD
- Apply brand colors
- Choose typography
- Add images and content
- Create design system

### 4. Prototyping
**Tools:** Figma, InVision, Principle
- Add interactions
- Create user flows
- Simulate real experience

### 5. Testing
- User testing sessions
- Gather feedback
- Iterate design

### 6. Handoff
**Tools:** Figma, Zeplin
- Provide specs
- Export assets
- Document interactions

## Figma Deep Dive

### Essential Shortcuts
- **V:** Selection tool
- **F:** Frame tool
- **R:** Rectangle
- **T:** Text
- **P:** Pen tool
- **Cmd/Ctrl + D:** Duplicate
- **Cmd/Ctrl + G:** Group
- **Cmd/Ctrl + /:** Quick actions

### Components
Create reusable elements:
1. Select element
2. Right-click → "Create Component"
3. Use instances across design
4. Update master = updates all instances

### Auto-Layout
Create responsive components:
1. Select frame
2. Add Auto Layout
3. Set spacing, padding
4. Elements resize automatically

### Constraints
Make responsive designs:
- Left/Right: Horizontal position
- Top/Bottom: Vertical position
- Scale: Resize proportionally

### Prototyping
1. Switch to Prototype tab
2. Click element, drag to frame
3. Choose trigger (click, hover, etc.)
4. Set animation
5. Click play to test

## Best Practices

- **Organize layers:** Use clear naming
- **Use components:** Don't repeat yourself
- **Create a design system:** Colors, typography, components
- **Version control:** Name versions clearly
- **Document decisions:** Add notes and comments
- **Test on devices:** Don't just design on desktop
- **Gather feedback early:** Don't wait for perfection

## Learning Resources

**Figma:**
- Figma YouTube channel
- Config conference talks
- Figma community files

**General:**
- Dribbble (inspiration)
- Behance (portfolios)
- UIMovement (interaction patterns)
- YouTube tutorials

## Practice Project

Design a mobile app:
1. **Sketch** ideas on paper
2. **Create wireframes** in Figma
3. **Design 3-5 screens** with full visual design
4. **Add interactions** between screens
5. **Test prototype** with a friend
6. **Iterate** based on feedback

## Final Tips

- Master one tool deeply before trying others
- Figma is great for beginners (free, collaborative)
- Keyboard shortcuts save hours
- Follow designers on Twitter for tips
- Join design communities
- Practice daily - even 30 minutes helps

Congratulations on completing the UI/UX Design course! You now have the foundations to create beautiful, user-centered designs. Keep practicing and building your portfolio!`
      },
    ],
  },
  {
    id: "4",
    title: "Advanced Data Analytics",
    description: "Dive deep into statistical analysis, machine learning, and predictive modeling.",
    instructor: "David Martinez",
    duration: "15 hours",
    level: "Advanced",
    image: "/src/assets/course-data.jpg",
    completed: false,
    lessons: [
      { 
        id: "4-1", 
        title: "Statistical Foundations", 
        duration: "90 min", 
        completed: false,
        content: `# Statistical Foundations

Build a solid statistical foundation essential for data analytics and machine learning!

## Why Statistics Matter

Statistics is the backbone of data science:
- Make sense of data
- Draw valid conclusions
- Make predictions
- Quantify uncertainty
- Support decision-making

## Descriptive Statistics

### Measures of Central Tendency

**Mean (Average)**
\`\`\`python
import numpy as np
data = [10, 15, 20, 25, 30]
mean = np.mean(data)  # 20
\`\`\`

**Median (Middle Value)**
\`\`\`python
median = np.median(data)  # 20
# Less affected by outliers than mean
\`\`\`

**Mode (Most Frequent)**
\`\`\`python
from scipy import stats
mode = stats.mode([1, 2, 2, 3, 3, 3, 4])  # 3
\`\`\`

### Measures of Spread

**Range**
\`\`\`python
data_range = max(data) - min(data)
\`\`\`

**Variance**
Average of squared differences from the mean
\`\`\`python
variance = np.var(data)
\`\`\`

**Standard Deviation**
Square root of variance (same units as data)
\`\`\`python
std_dev = np.std(data)
# 68% of data within 1 std dev
# 95% within 2 std devs
# 99.7% within 3 std devs
\`\`\`

**Interquartile Range (IQR)**
\`\`\`python
q1 = np.percentile(data, 25)
q3 = np.percentile(data, 75)
iqr = q3 - q1
\`\`\`

## Probability Basics

### Probability Rules
- P(event) ranges from 0 to 1
- P(certain event) = 1
- P(impossible event) = 0
- P(A or B) = P(A) + P(B) - P(A and B)
- P(not A) = 1 - P(A)

### Conditional Probability
P(A|B) = P(A and B) / P(B)

"Probability of A given B has occurred"

## Distributions

### Normal Distribution (Gaussian)
- Bell curve shape
- Defined by mean and std dev
- Many natural phenomena follow this

\`\`\`python
from scipy.stats import norm

# Generate normal distribution
data = norm.rvs(loc=0, scale=1, size=1000)  # mean=0, std=1

# Calculate probability
prob = norm.cdf(1.96)  # 97.5%
\`\`\`

### Other Important Distributions
- **Binomial:** Success/failure trials
- **Poisson:** Event counts in fixed interval
- **Exponential:** Time between events
- **Uniform:** All outcomes equally likely

## Hypothesis Testing

### The Process

1. **State Hypotheses**
   - Null Hypothesis (H₀): No effect/difference
   - Alternative Hypothesis (H₁): There is an effect

2. **Choose Significance Level (α)**
   - Usually 0.05 (5%)
   - Probability of rejecting true H₀

3. **Calculate Test Statistic**
   - t-test, z-test, chi-square, etc.

4. **Find P-value**
   - Probability of observing data if H₀ true

5. **Make Decision**
   - If p-value < α: Reject H₀
   - If p-value ≥ α: Fail to reject H₀

### T-Test Example

\`\`\`python
from scipy.stats import ttest_ind

# Compare two groups
group1 = [23, 25, 27, 29, 31]
group2 = [19, 21, 23, 25, 27]

statistic, pvalue = ttest_ind(group1, group2)

if pvalue < 0.05:
    print("Significant difference!")
else:
    print("No significant difference")
\`\`\`

## Correlation

Measures relationship between two variables.

**Pearson Correlation (r)**
- Ranges from -1 to 1
- +1: Perfect positive correlation
- 0: No correlation
- -1: Perfect negative correlation

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    'hours_studied': [1, 2, 3, 4, 5],
    'test_score': [60, 65, 75, 85, 90]
})

correlation = df['hours_studied'].corr(df['test_score'])
# Close to 1: strong positive correlation
\`\`\`

**Remember:** Correlation ≠ Causation!

## Regression Analysis

Predict one variable from another.

### Simple Linear Regression

\`\`\`python
from sklearn.linear_model import LinearRegression

X = [[1], [2], [3], [4], [5]]  # Independent variable
y = [2, 4, 5, 4, 5]            # Dependent variable

model = LinearRegression()
model.fit(X, y)

# Make prediction
prediction = model.predict([[6]])
\`\`\`

## Confidence Intervals

Range where true value likely falls.

\`\`\`python
from scipy import stats

data = [23, 25, 27, 29, 31]
confidence = 0.95

mean = np.mean(data)
std_err = stats.sem(data)
interval = stats.t.interval(confidence, len(data)-1, mean, std_err)

print(f"95% CI: {interval}")
\`\`\`

## Common Statistical Tests

- **T-test:** Compare means of 2 groups
- **ANOVA:** Compare means of 3+ groups
- **Chi-square:** Test relationships between categorical variables
- **Mann-Whitney U:** Non-parametric alternative to t-test
- **Wilcoxon:** Paired non-parametric test

## Practical Tips

### Avoid Common Mistakes
- Check assumptions (normality, independence)
- Consider sample size
- Watch for outliers
- Don't p-hack (trying many tests until one is significant)
- Report confidence intervals, not just p-values

### Data Exploration Checklist
1. Plot distributions
2. Check for outliers
3. Verify assumptions
4. Calculate descriptive statistics
5. Look for patterns

## Practice Exercises

1. **Calculate Statistics**
   - Given dataset: [12, 15, 18, 20, 22, 25, 30]
   - Find mean, median, mode, std dev, range

2. **Hypothesis Test**
   - Test if new feature increased user engagement
   - Before: mean=100, std=15, n=50
   - After: mean=110, std=18, n=50

3. **Correlation**
   - Find correlation between ad spend and sales
   - Create scatter plot
   - Calculate Pearson correlation

Next: Apply these concepts to Machine Learning!`
      },
      { 
        id: "4-2", 
        title: "Machine Learning Basics", 
        duration: "120 min", 
        completed: false,
        content: `# Machine Learning Basics

Welcome to the exciting world of Machine Learning! Learn how to build intelligent systems.

## What is Machine Learning?

Machine Learning is a subset of AI that enables computers to learn from data without being explicitly programmed.

**Traditional Programming:**
Input + Program → Output

**Machine Learning:**
Input + Output → Program (Model)

## Types of Machine Learning

### 1. Supervised Learning
Learn from labeled data (input-output pairs)

**Classification:** Predict categories
- Email: spam or not spam
- Image: cat or dog
- Customer: will churn or not

**Regression:** Predict continuous values
- House price
- Temperature
- Stock price

### 2. Unsupervised Learning
Find patterns in unlabeled data

**Clustering:** Group similar items
- Customer segmentation
- Document categorization

**Dimensionality Reduction:** Simplify data
- Data visualization
- Feature extraction

### 3. Reinforcement Learning
Learn through trial and error
- Game playing
- Robotics
- Self-driving cars

## The ML Workflow

### 1. Define the Problem
- What are you trying to predict?
- What data do you have?
- What's the business impact?

### 2. Collect Data
- Gather relevant data
- Ensure data quality
- Sufficient quantity

### 3. Explore Data (EDA)
\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv')
print(df.head())
print(df.info())
print(df.describe())

# Visualize
df.hist(figsize=(12, 10))
plt.show()
\`\`\`

### 4. Prepare Data
\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Handle missing values
df = df.dropna()  # or df.fillna()

# Encode categorical variables
df = pd.get_dummies(df, columns=['category'])

# Split data
X = df.drop('target', axis=1)
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
\`\`\`

### 5. Choose Model
Start simple, then increase complexity.

### 6. Train Model
\`\`\`python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train_scaled, y_train)
\`\`\`

### 7. Evaluate Model
\`\`\`python
from sklearn.metrics import accuracy_score, confusion_matrix

predictions = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy}")
\`\`\`

### 8. Tune & Improve
Optimize hyperparameters, try different models.

### 9. Deploy
Make available for predictions.

## Common Algorithms

### Linear Regression
Predict continuous values using linear relationship.

\`\`\`python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
\`\`\`

**Use for:** House prices, sales forecasting

### Logistic Regression
Binary classification (despite "regression" in name).

\`\`\`python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)
probabilities = model.predict_proba(X_test)
\`\`\`

**Use for:** Email spam, customer churn

### Decision Trees
Tree-like model of decisions.

\`\`\`python
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier(max_depth=5)
model.fit(X_train, y_train)
\`\`\`

**Pros:** Easy to interpret
**Cons:** Can overfit

### Random Forest
Ensemble of decision trees.

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Feature importance
importance = model.feature_importances_
\`\`\`

**Pros:** Powerful, reduces overfitting
**Use for:** Most classification/regression tasks

### K-Nearest Neighbors (KNN)
Classify based on nearest neighbors.

\`\`\`python
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train_scaled, y_train)
\`\`\`

**Pros:** Simple, no training
**Cons:** Slow predictions with large datasets

### Support Vector Machines (SVM)
Find optimal decision boundary.

\`\`\`python
from sklearn.svm import SVC

model = SVC(kernel='rbf')
model.fit(X_train_scaled, y_train)
\`\`\`

**Use for:** Binary classification, small-medium datasets

### K-Means Clustering
Group similar data points (unsupervised).

\`\`\`python
from sklearn.cluster import KMeans

model = KMeans(n_clusters=3)
clusters = model.fit_predict(X)

# Visualize
plt.scatter(X[:, 0], X[:, 1], c=clusters)
plt.show()
\`\`\`

**Use for:** Customer segmentation, pattern discovery

## Model Evaluation

### Classification Metrics

**Accuracy**
\`\`\`python
from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_test, predictions)
\`\`\`

**Confusion Matrix**
\`\`\`python
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, predictions)
# [[True Neg,  False Pos],
#  [False Neg, True Pos]]
\`\`\`

**Precision, Recall, F1-Score**
\`\`\`python
from sklearn.metrics import classification_report
print(classification_report(y_test, predictions))
\`\`\`

- **Precision:** Of predicted positive, how many correct?
- **Recall:** Of actual positive, how many found?
- **F1:** Harmonic mean of precision and recall

### Regression Metrics

**Mean Squared Error (MSE)**
\`\`\`python
from sklearn.metrics import mean_squared_error
mse = mean_squared_error(y_test, predictions)
\`\`\`

**R² Score**
\`\`\`python
from sklearn.metrics import r2_score
r2 = r2_score(y_test, predictions)
# 1.0 = perfect, 0.0 = bad
\`\`\`

## Overfitting vs Underfitting

**Overfitting:** Model too complex, memorizes training data
- High training accuracy, low test accuracy
- Solution: Simpler model, more data, regularization

**Underfitting:** Model too simple, can't capture patterns
- Low training and test accuracy
- Solution: More complex model, more features

## Cross-Validation

Test model on multiple splits of data.

\`\`\`python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5)  # 5 folds
print(f"Average accuracy: {scores.mean()}")
print(f"Std deviation: {scores.std()}")
\`\`\`

## Feature Engineering

Create better features from existing data.

\`\`\`python
# Create new features
df['age_squared'] = df['age'] ** 2
df['income_per_person'] = df['income'] / df['family_size']

# Binning
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 65, 100])

# Date features
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
\`\`\`

## Practice Project: Titanic Survival Prediction

\`\`\`python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load data (use titanic dataset from Kaggle or seaborn)
df = pd.read_csv('titanic.csv')

# Prepare data
df = df[['Survived', 'Pclass', 'Sex', 'Age', 'Fare']].dropna()
df = pd.get_dummies(df, columns=['Sex'])

# Split
X = df.drop('Survived', axis=1)
y = df['Survived']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy}")
\`\`\`

## Next Steps

You now understand ML basics! Next lessons:
- Model Training (deep dive)
- Feature Engineering (advanced)
- Deployment (production ML)

Keep practicing with real datasets from Kaggle!`
      },
      { 
        id: "4-3", 
        title: "Model Training", 
        duration: "100 min", 
        completed: false,
        content: "# Model Training\n\nAdvanced model training techniques coming soon..."
      },
      { 
        id: "4-4", 
        title: "Feature Engineering", 
        duration: "80 min", 
        completed: false,
        content: "# Feature Engineering\n\nAdvanced feature engineering techniques coming soon..."
      },
      { 
        id: "4-5", 
        title: "Deployment Strategies", 
        duration: "110 min", 
        completed: false,
        content: "# Deployment Strategies\n\nLearn to deploy your models to production. Content coming soon..."
      },
    ],
  },
];
